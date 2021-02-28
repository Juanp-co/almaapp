import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GlobalService} from '../../../services/global.service';
import {ICursoExamen, ICursoExamenFinalizado} from '../course.model';
import {CookiesService} from '../../../services/cookies.service';
import {CursoService} from '../curso.service';

@Component({
  selector: 'app-modal-examen-tema',
  templateUrl: './modal-examen-tema.page.html',
  styleUrls: ['./modal-examen-tema.page.scss'],
})
export class ModalExamenTemaPage implements OnInit {

  @Input() slug: any = null;
  @Input() themeId: any = null;
  @Input() test: any = null;
  @Input() title: any = null;

  totalsViews = 0;
  viewSelected = 0;
  questions: any = [];
  questionsView: ICursoExamen = null;
  finishedTest: ICursoExamenFinalizado = {
    msg: null,
    average: 0,
    approved: false
  };
  questionsModel: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private alertController: AlertController,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private cursoService: CursoService,
    private modalController: ModalController,
  ) { }

  async ngOnInit() {
    this.setSectionsQuestions();
  }

  setSectionsQuestions() {
    const totals = this.test.length;
    this.totalsViews = this.globalSer.getPagination(totals, 2);

    for (let i = 0; i < this.totalsViews; i++) {
      const jump = i === 0 ? 0 : i * 2;
      const selected = this.test.slice(jump, jump + 2);
      this.questions.push(selected);
    }

    for (let j = 0; j < totals; j++) {
      if (this.test[j].inputType === 'checkbox') {
        this.questionsModel[`${this.test[j]._id}`] = []; // create a new value with Question ID
        // set data with the new object
        this.test[j].values.forEach(v => {
          this.questionsModel[`${this.test[j]._id}`].push({
            val: v,
            isChecked: false
          });
        });
      }
      else this.questionsModel[`${this.test[j]._id}`] = null;
    }

    if (this.totalsViews > 0) {
      this.totalsViews = this.totalsViews - 1;
      if (!!this.questions[0]) this.questionsView = this.questions[0];
    }
  }

  checkAnswerSections(view: number): boolean {
    // check required answer
    const totals = this.questions[view].length;
    let showMsg = false;

    for (let i = 0; i < totals; i++) {
      if (this.questions[view][i].require) {
        if (this.questions[view][i].inputType === 'checkbox') {
          const answered = this.questionsModel[this.questions[view][i]._id].filter(a => a.isChecked);
          showMsg = answered.length === 0;
        }
        else showMsg = this.questionsModel[this.questions[view][i]._id] === null;
      }
      if (showMsg) break;
    }

    return showMsg;
  }

  async getQuestionsFromList(next = false) {
    // check required answer
    if (next && this.checkAnswerSections(this.viewSelected)) {
      // await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero debe asegurarse de responder las preguntas obligatorias de esta sección.'
      );
    }
    else {
      if (next) this.viewSelected = this.viewSelected + 1;
      else this.viewSelected = this.viewSelected - 1;
      this.questionsView = this.questions[this.viewSelected] || null;
    }
  }

  async finishTest(): Promise<boolean> {
    await this.globalSer.presentLoading();

    // check required answer
    if (this.checkAnswerSections(this.viewSelected)) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero debe asegurarse de responder las preguntas obligatorias de esta sección.'
      );
      return false;
    }

    const data: any = [];
    const keys = Object.keys(this.questionsModel);

    if (keys.length > 0) {
      keys.forEach(k => {
        const model = {
          questionId: k,
          answer: null
        };
        if (this.questionsModel[k] !== null && typeof this.questionsModel[k] === 'object') {
          const res = [];
          this.questionsModel[k].forEach((q: any, i: number) => {
            if (q.isChecked) res.push(i);
          });
          model.answer = res.toString();
        }
        else model.answer = this.questionsModel[k];

        data.push(model);
      });
    }

    if (data.length === 0) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se logró obtener la respuestas a procesar.');
      return false;
    }

    const answer = await this.cursoService.sendAnswer(this.slug, this.themeId, data);

    if (answer && !answer.error) {
      this.finishedTest = answer;
      const dataCourseUser = this.cookiesService.getCookie(this.slug);
      const index = dataCourseUser.temary.findIndex(t => t._id === this.themeId);
      if (index > -1) {
        dataCourseUser.temary[index].view = 2;
        dataCourseUser.temary[index].approved = this.finishedTest.approved;
        dataCourseUser.temary[index].approvedDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
        dataCourseUser.temary[index].date = dayjs().format('YYYY-MM-DD HH:mm:ss');
        this.cookiesService.setCookie(this.slug, dataCourseUser);
      }
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
      return false;
    }
    else {
      await this.globalSer.dismissLoading();
      await this.closeModal();
      return false;
    }

    return true;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async dismiss() {
    await this.globalSer.alertConfirm({
      header: 'Saliendo del examen',
      message: '¿Está seguro qué desea salir del examen?<br/><br/>NOTA: Se perderá todo el progreso.',
      confirmAction: async () => await this.modalController.dismiss()
    });
  }
}
