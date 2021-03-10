import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import dayjs from 'dayjs';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  @Input() title = 'Cargando ...';
  @Input() hide = false;
  @Input() typeChart = 'doughnut';
  @Input() precision = false;
  @ViewChild('chartElem', { static: false }) chartElem: ElementRef<HTMLElement>;

  colors: any = ['#009e28', '#3dc2ff', '#5260ff', '#2dd36f', '#ffc409', '#eb445a', '#222428', '#92949c', '#f4f5f8'];
  view: any = { show: true, picture: null };
  chart: any = null;
  isArray = false;
  pages = 0;
  page = 1;
  index = 0;
  totals = 0;

  handlePage = (page: number): void => {
    this.page = page;
    this.index = page - 1;
    if (this.chart) this.chart.destroy();
    this.createBarChart(this.data);
  }

  constructor(
    private globalSer: GlobalService
  ) { }

  ngOnInit() {
    if (this.data) {
      if (this.data.data.length > 0) {
        this.isArray = Array.isArray(this.data.data[0]) || false;
        if (this.isArray) {
          this.pages = this.globalSer.getPagination(this.data.data.length, 1);
          this.data.data.forEach(d => {
            if (d) this.totals += d.length;
          });
        }
        else this.totals = this.data.data.length;
      }
    }
  }

  ngAfterViewInit() {
    if (this.data) {
      if (this.data.data.length > 0) {
        this.isArray = Array.isArray(this.data.data[0]) || false;
        if (this.isArray) this.pages = this.globalSer.getPagination(this.data.data.length, 1);
        this.createBarChart(this.data);
      }
    }
  }

  createBarChart(obj: any) {
    const getColors = (toGetColors: number) => {
      return this.colors.slice(0, toGetColors);
    };

    const elem: any = {
      title: obj.title || 'Sin definir',
      qty: obj.qty || 0,
      data: [],
    };

    console.log(this.isArray);
    console.log('pages', this.pages);
    elem.data = this.isArray ? obj.data[this.index] : obj.data;
    console.log('elem', elem);

    const labels = elem.data ? elem.data.map(d => `${d.label} (${d.qty})`) : [];
    const data = elem && elem.data ? elem.data.map(d => d.qty) : [];
    Chart.plugins.register({
      beforeDraw: (chartInstance) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
      }
    });

    const ticks: any = {
      beginAtZero: true,
      display: this.typeChart === 'bar'
    };

    if (!this.precision) ticks.precision = 0;

    this.chart = new Chart(this.chartElem.nativeElement, {
      type: this.typeChart,
      data: {
        labels,
        datasets: [{
          label: obj.title || 'Sin definir',
          data,
          backgroundColor: getColors(data.length), // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          onComplete: () => { this.view.picture = this.chart.toBase64Image(); }
        },
        scales: {
          xAxes: [{
            ticks,
            gridLines: {
              drawOnChartArea: this.typeChart === 'bar'
            }
          }],
          yAxes: [{
            ticks,
            gridLines: {
              drawOnChartArea: this.typeChart === 'bar'
            }
          }]
        },
        legend: {
          display: this.typeChart !== 'bar',
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        }
      }
    });
  }

  // actions views
  async changeChartType() {
    await this.globalSer.alertWithList({
      header: 'Cambiar gráfico',
      inputs: [
        {
          name: `type-chart`,
          type: 'radio',
          label: `Barras`,
          value: 'bar',
          checked: this.typeChart === 'bar',
        },
        {
          name: `type-chart`,
          type: 'radio',
          label: `Dona`,
          value: 'doughnut',
          checked: this.typeChart === 'doughnut',
        },
        // {
        //   name: `type-chart`,
        //   type: 'radio',
        //   label: `Lineal`,
        //   value: 'line',
        //   checked: this.typeChart === 'line',
        // },
        {
          name: `type-chart`,
          type: 'radio',
          label: `Pie`,
          value: 'pie',
          checked: this.typeChart === 'pie',
        },
        // {
        //   name: `type-chart`,
        //   type: 'radio',
        //   label: `Radar`,
        //   value: 'radar',
        //   checked: this.typeChart === 'radar',
        // },
      ],
      confirmAction: (value) => {
        this.typeChart = value;
        if (this.chart) this.chart.destroy();
        this.createBarChart(this.data);
      }
    });
  }

  setShowView() {
    this.view.show = !this.view.show;
  }

  downloadPicture() {
    const link = document.createElement('a');
    link.href = this.view.picture;
    link.download = `${this.title ? this.title.toLowerCase().replace(' ', '-') : 'Chart'}-${dayjs().format('YYYY-MM-DD_HH_mm_ss')}.jpg`;
    link.click();
  }

}
