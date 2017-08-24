import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {HomePage} from '../home/home';
import {Home1Page} from '../home1/home1';
/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  PostFirebase:any[];
        FirebasePost:any[];
        myImg:any;

       listPost:FirebaseListObservable<any>;
            Post={
              id:'',
              date:'',
              name:'',
              detail:'',
              photo:'',
              status:'',

            }
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,public af :AngularFireDatabase, private fbAuth: AngularFireAuth) {
    this.listPost =  af.list("/post_category");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  onSave(Post){
      let dataPost = {
    
        date:Date.now(),
        name:Post.name,
        detail:Post.detail,
        photo:this.myImg,
        status:'ยังไม่ได้รับการแก้ไข',

      }
        this.fbAuth.authState.subscribe((authState) => {
             this.listPost.push(dataPost);
              //this.onUploadPhoto();
              this.navCtrl.setRoot(Home1Page);
        })
       
  }
      takePicture() {
            let options:CameraOptions = {       
                destinationType: this.camera.DestinationType.DATA_URL, 
                sourceType: this.camera.PictureSourceType.CAMERA,   
                encodingType: this.camera.EncodingType.JPEG, 
                saveToPhotoAlbum: false,correctOrientation: true   
                }   
                this.camera.getPicture(options).then((imageData) => { 
                  this.myImg = 'data:image/jpeg;base64,' + imageData;     }, (err) => {

           });
}
            openMap(){
            this.navCtrl.push(HomePage);
            }



}
