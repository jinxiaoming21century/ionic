import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { UsuarioService } from "../../providers/usuario";
import { ProductoPage, CategoriasPage, MenuGarzonPage } from '../index.paginas';
import { MenuCajaPage } from '../menu-caja/menu-caja';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  correo: string = "";
  contrasena: string = "";
  tipo_usuario: number;

  productoPage = ProductoPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private _us: UsuarioService
  ) { }

  ingresar () {
    console.log('correo ->', this.correo);
    console.log('correo ->', this.contrasena);

    this._us.ingresar(this.correo, this.contrasena).subscribe((response) => {
      console.log('response ->', response);
      var resp: string = response;

      switch (resp) {
        case '1':
          this.navCtrl.push(MenuGarzonPage);
        break;

        case '2':
          this.navCtrl.push(MenuCajaPage);
        break;
      }
    });
  }
}
