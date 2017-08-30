import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the Home3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home3',
  templateUrl: 'home3.html',
})
export class Home3Page {
  PostFirebase:any[];
  FirebasePost:any[];
  fileUpload:any;
  myImg:any;
listPost: FirebaseListObservable<any>;

Post={
      id:'',
      date:'',
      name:'',
      detail:'',
      photo:'',
      status:'',

    }
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((dataAuth) => {
      console.log(dataAuth);
      this.listPost = afDatabase.list("/post_category");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home3Page');
  }

}
