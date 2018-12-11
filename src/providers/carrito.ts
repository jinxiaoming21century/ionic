import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map'
import { AlertController, Platform, ModalController, ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { UsuarioService } from "./usuario";

import { LoginPage, CarritoPage, CarritoCajaPage } from "../pages/index.paginas";

import { URL_SERVICIOS } from "../config/url.servicios";

@Injectable()
export class CarritoService {
  items: any[] = [];
  total_carrito: number = 0;
  ordenes: any[] = [];
  resultados: any[] = [];

  constructor(
    public http: Http,
    private alertCtrl:AlertController,
    private platform: Platform,
    private storage: Storage,
    private _us:UsuarioService,
    private modalCtrl:ModalController,
    private toastCtrl: ToastController
  ) {
    console.log('Hello CarritoService Provider');
    this.cargar_storage();
    this.actualizar_total();
  }

  remover_item (idx: number) {
    this.items.splice(idx, 1);
    this.guardar_storage();
  }

  realizar_pedido () {
    let data = new URLSearchParams();
    let codigos: string[] = [];

    for (let item of this.items) {
      codigos.push(item.codigo);
    }

    data.append("items", codigos.join(","));

    let url =`${URL_SERVICIOS}/pedidos/realizar_orden/${this._us.token}/${this._us.id_usuario}`;
    console.log('url ->', url);
    this.http.post(url, data).subscribe(resp => {
      let respuesta= resp.json();

      if (respuesta.error) {
        this.items = [];

        this.alertCtrl.create({
          title: "Error",
          subTitle: respuesta.mensaje,
          buttons: ["OK"]
        }).present();

      } else {
        this.items = [];

        this.alertCtrl.create({
          title: "Pedido realizado!",
          subTitle: "Enviando datos a cocina",
          buttons: ["OK"]
        }).present();
      }
    })
  }

  ver_carrito () {
    let modal: any;
    modal = this.modalCtrl.create(LoginPage);
    modal.present();

    modal.onDidDismiss((abrirCarrito: boolean) => {
      if (abrirCarrito) {
        this.modalCtrl.create(CarritoPage);
      }
    })
  }

  agregar_carrito (item_parametro: any) {
    this.items.push(item_parametro);

    this.actualizar_total();
    this.guardar_storage();
    this.MensajeToast();
  }

  private guardar_storage () {
    if (this.platform.is("cordova")) {
      //dispositivo
      this.storage.set('items', this.items);
    } else {
      //computdora
      localStorage.setItem("item", JSON.stringify(this.items));
    }
  }

  cargar_storage () {
    let promesa = new Promise((resolve, reject) => {
      if (this.platform.is("cordova")) {
        //dispositivo
        this.storage.ready().then(() => {
          this.storage.get("items").then( items => {
            if (items) {
              this.items = items;
            }

            resolve();
          })
        });

      } else {
        //computdora
        if (localStorage.getItem("items")) {
          this.items = JSON.parse(localStorage.getItem("items"));
        }

        resolve();
      }
    });

    return promesa;
  }

  cargar_ordenes () {
    let url = `${URL_SERVICIOS}/pedidos/obtener_pedidos/${this._us.token}/${this._us.id_usuario}`;
    console.log('url ->', url);

    this.http.get(url).map(resp => resp.json()).subscribe(data => {
      if (data.error) {
        console.log('error ->', data.error);
      } else {
        this.ordenes = data.ordenes;
      }
    })
  }



  actualizar_total () {
    this.total_carrito = 0;

    for (let item of this.items) {
        this.total_carrito += Number(item.precio_compra);
    }
  }

  borrar_orden (orden_id: string) {
    let url = `${URL_SERVICIOS}/pedidos/borrar_pedido/${this._us.token}/${this._us.id_usuario}/${orden_id} `;
    console.log('url ->', url);

    return this.http.delete(url).map(resp => resp.json());
  }

  MensajeToast () {
    let toast = this.toastCtrl.create({
      message: 'Plato agregado al pedido',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  MensajeToast2 () {
    let toast = this.toastCtrl.create({
      message: 'Pedido eliminado',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  buscar( termino:string ){

    let url = URL_SERVICIOS + "/pedidos/buscar/" + termino;

    this.http.get( url )
            .subscribe( resp =>{

              let data = resp.json();

              this.resultados = data.productos;
              console.log(this.resultados);

            });

  }
}
