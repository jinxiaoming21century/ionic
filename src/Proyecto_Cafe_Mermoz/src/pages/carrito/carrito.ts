import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import {CarritoService} from "../../providers/carrito";


@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService,
              private viewCtrl:ViewController,
              private toastCtrl: ToastController) {
  }




  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Pedido agregado al carrito',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}



}
