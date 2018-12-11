import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarritoService, ProductosService, UsuarioService} from '../providers/index.services';
import {HttpModule} from "@angular/http";
import { CarritoPage, CategoriasPage, LoginPage,ProductoPage,OrdenesPage, PorCategoriasPage, OrdenesDetallePage, MenuGarzonPage, BusquedaPage, TabsPage } from '../pages/index.paginas';
import {ImagenPipe} from "../pipes/imagen";
import { IonicStorageModule } from '@ionic/storage';
import { OrdenDetalleCajaPage } from '../pages/orden-detalle-caja/orden-detalle-caja';
import { MenuCajaPage } from '../pages/menu-caja/menu-caja';
import { OrdenesCajaPage } from '../pages/ordenes-caja/ordenes-caja';
import { CarritoCajaPage } from '../pages/carrito-caja/carrito-caja';

@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    MenuGarzonPage,
    BusquedaPage,
    OrdenDetalleCajaPage,
    TabsPage,
    MenuCajaPage,
    OrdenesCajaPage,
    CarritoCajaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    ProductoPage,
    MenuGarzonPage,
    BusquedaPage,
    OrdenDetalleCajaPage,
    TabsPage,
    MenuCajaPage,
    OrdenesCajaPage,
    CarritoCajaPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    CarritoService,
    ProductosService,
    UsuarioService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
