import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ProductosService} from "../../providers/productos";
import { CarritoService } from '../../providers/index.services';

import { OrdenDetalleCajaPage } from '../orden-detalle-caja/orden-detalle-caja';
import { OrdenesDetallePage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  ordenesDetallePage=OrdenesDetallePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps:ProductosService,
              private _cs:CarritoService) {
  }

    buscar_pedidos(ev:any){

      let valor = ev.target.value;
      console.log(valor);

      this._cs.buscar(valor);
      //revisar problema al encontrar los pedidos iguales

    }





}
