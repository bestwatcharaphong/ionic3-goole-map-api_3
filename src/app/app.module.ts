import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {RegisterPage} from'../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {LogoutPage} from '../pages/logout/logout';
import { Home1Page } from '../pages/home1/home1';
import { Home2Page } from '../pages/home2/home2';
import { Home3Page } from '../pages/home3/home3';
import { Home4Page } from '../pages/home4/home4';
import { Home5Page } from '../pages/home5/home5';
import { ReversePipe } from '../pipes/reverse/reverse'; 
import {AddPage} from '../pages/add/add';
import{ Camera}from '@ionic-native/camera';
import{Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyCAgLjTHvsckgXo8MI5GmR4_pZBHa9HqgE",
  authDomain: "aaaaaa-d25fd.firebaseapp.com",
  databaseURL: "https://aaaaaa-d25fd.firebaseio.com",
  projectId: "aaaaaa-d25fd",
  storageBucket: "aaaaaa-d25fd.appspot.com",
  messagingSenderId: "382514116265"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    Home1Page,
    ReversePipe,
    LogoutPage,
    RegisterPage,
    AddPage,
    Home2Page,
    Home3Page,
    Home4Page,
    Home5Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
     AngularFireModule.initializeApp(config,'ion3-goole-map-api_3'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    Home1Page,
    LogoutPage,
    RegisterPage,
    AddPage,
    Home2Page,
    Home3Page,
    Home4Page,
    Home5Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
