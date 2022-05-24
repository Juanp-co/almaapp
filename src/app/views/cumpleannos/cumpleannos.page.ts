import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {CumpleannosService} from './cumpleannos.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-cumpleannos',
  templateUrl: './cumpleannos.page.html',
  styleUrls: ['./cumpleannos.page.scss'],
})
export class CumpleannosPage implements OnInit {

  birthdays: any = null;
  today = dayjs().format('YYYY-MM-DD');
  options = [
    { label: 'Hoy', value: 'today' },
    { label: 'Mañana', value: 'tomorrow' },
    { label: 'Próximos', value: 'next' },
    { label: 'Anteriores', value: 'previous' },
  ];
  selected = 0;

  constructor(
    private cumpleannosService: CumpleannosService,
    private globalSer: GlobalService,
  ) {}

  ngOnInit() {
    this.getBirthdays();
  }

  async getBirthdays() {
    await this.globalSer.presentLoading();
    const list = await this.cumpleannosService.getBirthdays();
    this.birthdays = await this.parseBirthdays(list);
    await this.globalSer.dismissLoading();
  }

  async parseBirthdays(data: any[] = []) {
    const dataBirthdays: any = {
      lastChecked: this.today,
      today: [],
      tomorrow: [],
      next: [],
      previous: []
    };

    const todayUnix = dayjs().unix();
    const todayMMDD = dayjs().format('MM-DD');
    const tomorrowMMDD = dayjs().add(1, 'd').format('MM-DD');
    const year = dayjs().format('YYYY');

    const sortAscForDate = (a: any, b: any) => {
      if (a.birthday > b.birthday) return 1;
      if (a.birthday < b.birthday) return -1;
      return 0;
    };

    const sortDescForDate = (a: any, b: any) => {
      if (a.birthday > b.birthday) return -1;
      if (a.birthday < b.birthday) return 1;
      return 0;
    };

    // parser data
    data?.forEach(l => {
      l.birthday = l.birthday?.substr(5);
      l.birthdayText = dayjs(l.birthday, 'MM-DD', true).locale('es').format('DD [de] MMMM');
      if (l.birthday === todayMMDD) dataBirthdays.today.push(l);
      else if (l.birthday === tomorrowMMDD) dataBirthdays.tomorrow.push(l);
      else if (todayUnix < dayjs(`${year}-${l.birthday}`, 'YYYY-MM-DD', true).unix())
        dataBirthdays.next.push(l);
      else dataBirthdays.previous.push(l);
    });

    // order for dates
    dataBirthdays.next = dataBirthdays.next.sort(sortAscForDate);
    dataBirthdays.previous = dataBirthdays.previous.sort(sortDescForDate);

    return dataBirthdays;
  }

  /* actions button */
  async filterForRange() {
    const inputs: any[] = [];
    for (const [index, value] of this.options.entries()) {
      inputs.push( {
        name: `list-opts`,
        type: 'radio',
        label: value.label,
        value: index,
        checked: index === this.selected,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Listar',
      inputs,
      confirmAction: async (value) => {
        this.selected = value;
      }
    });
  }

}
