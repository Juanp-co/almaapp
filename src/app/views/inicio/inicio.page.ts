import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  login = false

  user = undefined
  pass = undefined

  opciones = [
    { titulo:"Red padres", imagen:"assets/icon/red.svg" },
    { titulo:"Ofrendas", imagen:"assets/icon/ofrenda.svg" },
    { titulo:"Disipulado", imagen:"assets/icon/escuela.svg" },
    { titulo:"Reportes", imagen:"assets/icon/reportes.svg" },
    { titulo:"Calendario", imagen:"assets/icon/calendario.svg" }
  ]

  constructor(
    public globalSer:GlobalService,
    public navCtrl:NavController
  ) { }

  ngOnInit() {

  }

  async ingresar(){
    if(this.pass && this.user){

      this.globalSer.presentLoading().then(()=> {

        setTimeout(() => {
          this.login = true
          this.globalSer.presentAlert('Info', "Ingreso exitoso!")
          this.globalSer.dismissLoading()
        }, 3000);

      })


    } else {
      this.globalSer.presentAlert('Alerta', "Ingresa usuario y contraseña!")
    }
  }

  irMenu(num){
    num += 1
    switch (num) {
      case 1:
        this.navCtrl.navigateForward('padres')
        break;
      case 2:
        this.navCtrl.navigateForward('ofrenda')
        break;
      case 3:
        this.navCtrl.navigateForward('escuela')
        break;
      case 4:
        this.navCtrl.navigateForward('estadistica')
        break;
      case 5:
        this.navCtrl.navigateForward('eventos')
        break;
    }
  }

}
