import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CarritoService } from '../../providers/index.services';
import { OrdenDetalleCajaPage } from '../orden-detalle-caja/orden-detalle-caja';


@Component({
  selector: 'page-ordenes-caja',
  templateUrl: 'ordenes-caja.html',
})
export class OrdenesCajaPage {

  //ordenesDetalle = OrdenDetalleCajaPage;
ordenDetalleCaja=OrdenDetalleCajaPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService) {
  }

  ionViewDidLoad() {
    console.log("cargando ordenes");
    this._cs.cargar_ordenes();
  }

}
