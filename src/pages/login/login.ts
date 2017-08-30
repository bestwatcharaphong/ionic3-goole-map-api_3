import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { Home1Page } from '../home1/home1';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {RegisterPage} from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import{Facebook} from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  AuthState:any;
   
  Users  = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
       public af :AngularFireDatabase,
       private afAuth: AngularFireAuth,
       public viewCtrl:ViewController,
       public modalCtrl: ModalController,
       public facebook:Facebook
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  LoginEmailAndPassWord(){
    console.log('User ', this.Users);
    
      this.afAuth.auth.signInWithEmailAndPassword(this.Users.email, this.Users.password).then((resp)=>{
        console.log('Authenticate ',resp);
        this.navCtrl.push(Home1Page);
        this.navCtrl.setRoot(Home1Page);
        this.viewCtrl.showBackButton(false);
      }).catch((error) =>{
        console.log('Error signWithEmailAnsPassword ', error);
      });
    }

    fblogin(){
       this.facebook.login(['email']).then(res=>{

        const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(fc).then(fs=>{
          alert("firebase sec");
        }).catch(ferr=>{
          alert("firebase error");
        })

       }).catch(err=>{
           alert('best');
       })
    }

    submitRegister(){
      let registerModal = this.modalCtrl.create(RegisterPage);
        registerModal.present();
    }
   
  
}
