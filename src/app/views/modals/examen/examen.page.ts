import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../../services/global.service';
import {ExamenService} from './examen.service';
import {IExamen, IExamenFinalizado} from './examen.model';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {
  slug: any = null;
  themeId: any = null;
  test: any = null;
  totalsViews = 0;
  viewSelected = 0;
  questions: any = [];
  questionsView: IExamen = null;
  finishedTest: IExamenFinalizado = {
    msg: null,
    average: 0,
    approved: false
  };
  questionsModel: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private alertController: AlertController,
    private globalSer: GlobalService,
    private testService: ExamenService,
    private modalController: ModalController,
    private navParams: NavParams,
    // private platform: Platform
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   console.info('The events get captured');
    // });
    // document.addEventListener('ionBackButton', (ev) => {
    //   ev.detail.register(10, () => {
    //     console.info('The events get captured');
    //   });
    // });

    // document.onload = this.deshabilitaRetroceso();
  }

  async ngOnInit() {
    this.test = this.navParams.data.content.test;
    this.slug = this.navParams.data.content.slug;
    this.themeId = this.navParams.data.content.themeId;
    this.setSectionsQuestions();
  }

  setSectionsQuestions() {
    const totals = this.test.length;
    const totalSeparations = totals > 0 ? totals / 2 : 0;
    this.totalsViews = totalSeparations - 1;

    for (let i = 0; i < totalSeparations; i++) {
      const jump = i === 0 ? 0 : i * 2;
      const selected = this.test.slice(jump, jump + 2);
      this.questions.push(selected);
    }

    for (let j = 0; j < totals; j++) {
      if (this.test[j].inputType === 'checkbox'){
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

    if (totalSeparations > 0) {
      this.totalsViews = totalSeparations - 1;
      if (!!this.questions[0]) this.questionsView = this.questions[0];
    }
  }

  checkAnswerSections(view: number): boolean {
    // check required answer
    const totals = this.questions[view].length;
    let showMsg = false;

    for (let i = 0; i < totals; i++) {
      if (this.questions[view][i].require) {
        if (this.questions[view][i].inputType === 'checkbox'){
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
    // await this.globalSer.presentLoading();
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
      // await this.globalSer.dismissLoading();
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

    const answer = await this.testService.sendAnswer(this.slug, this.themeId, data);

    if (answer && !answer.error) {
      this.finishedTest = answer;
      await this.globalSer.dismissLoading();
    }
    else if (answer && answer.error) await this.globalSer.errorSession();
    else {
      await this.globalSer.dismissLoading();
      await this.closeModal();
    }

    return true;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async dismiss() {
    const alert = await this.alertController.create({
      header: 'Saliendo del examen',
      message: '¿Está seguro que desea salir del examen?<br/><br/>NOTA: Se perderá todo el progreso.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: '¡Sí, seguro!',
          handler: async () => {
            await this.modalController.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }
}
