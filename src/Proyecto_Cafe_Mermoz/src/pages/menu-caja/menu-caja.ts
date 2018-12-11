import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario';
import { CategoriasPage, CarritoPage, BusquedaPage, OrdenesPage } from '../index.paginas';
import { OrdenesCajaPage } from '../ordenes-caja/ordenes-caja';

@Component({
  selector: 'page-menu-caja',
  templateUrl: 'menu-caja.html',
})
export class MenuCajaPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService) {
  }

  ir_a_ordenes(){
    this.navCtrl.push(OrdenesPage);
  }
  ir_a_categoria(){
    this.navCtrl.push(CategoriasPage);
  }
  ir_a_detalle(){
    this.navCtrl.push(CarritoPage);
  }

  ir_a_buscar(){
    this.navCtrl.push(BusquedaPage);
  }

}
