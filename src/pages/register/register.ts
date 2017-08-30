import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
listPost1:FirebaseListObservable<any>;
 Add={
              name:'',
              lastname:'',
              address:'',
              email:'',
              password:'',
              phone:'',

            }

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,public af :AngularFireDatabase) {
     this.listPost1 =  af.list("/Register_member");
  }
    
  onSavemember(Add){
     let datapost1 = {
               name:Add.name,
               lastname:Add.lastname,
               address:Add.address,
               email:Add.email,
               password:Add.password,
               phone:Add.phone,
     }
           
             this.listPost1.push(datapost1);
              
              
        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    closeRegisterPage(){
       this.viewCtrl.dismiss();
       
    }

}
