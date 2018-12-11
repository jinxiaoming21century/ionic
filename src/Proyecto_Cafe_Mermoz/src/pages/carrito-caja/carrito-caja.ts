import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import {CarritoService} from "../../providers/index.services";

@Component({
  selector: 'page-carrito-caja',
  templateUrl: 'carrito-caja.html',
})
export class CarritoCajaPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _cs: CarritoService,
    private viewCtrl:ViewController,
    private toastCtrl: ToastController
  ) { }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Pedido agregado al carrito',
      duration: 3000,
      position: 'footer'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
