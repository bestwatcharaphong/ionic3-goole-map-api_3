import { Component,ViewChild  } from '@angular/core';
import { Platform,MenuController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Home1Page } from '../pages/home1/home1';
import { AddPage } from '../pages/add/add';
import { LogoutPage } from '../pages/logout/logout';
import {RegisterPage} from'../pages/register/register';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

   page:Array<{ title:string,component:any}>
    @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menu:MenuController) {

      this.page=[
        {title:'โพสล่าสุด',component:Home1Page},
        {title:'เพิ่มข้อมูล',component:AddPage},
        {title:'แผนที่',component:HomePage},
        {title:'ออกจากระบบ',component:LogoutPage}
       
     ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page){
    this.nav.setRoot(page.component);
    this.menu.toggle();

  }
}

