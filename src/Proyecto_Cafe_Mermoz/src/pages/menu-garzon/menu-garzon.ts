import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { UsuarioService } from '../../providers/index.services';
import { CarritoPage, CategoriasPage,OrdenesPage, BusquedaPage } from '../index.paginas';


@Component({
  selector: 'page-menu-garzon',
  templateUrl: 'menu-garzon.html',
})
export class MenuGarzonPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService) {
  }

  ir_a_orden(){
    this.navCtrl.push(OrdenesPage);
  }
  ir_a_categoria(){
    this.navCtrl.push(CategoriasPage);
  }
  ir_a_detalle(){
    this.navCtrl.push(CarritoPage);
  }



}
