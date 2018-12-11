import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CarritoService } from '../../providers/index.services';


@Component({
  selector: 'page-orden-detalle-caja',
  templateUrl: 'orden-detalle-caja.html',
})
export class OrdenDetalleCajaPage {

  orden: any = {};


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs: CarritoService) {

                this.orden = this.navParams.get("orden");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenDetalleCajaPage');
  }


  borrar_orden (orden_id: string) {
    this._cs.borrar_orden(orden_id).subscribe(data => {
      if (data.error) {
        console.log('error ->', data.error);
      } else {
        this.navCtrl.pop();
      }
    });
  }

}
