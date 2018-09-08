import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert
  register()
  {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value).then(
      data=>{
        console.log('got the data',data);
        this.alertCtrl.create({
          title: 'Info',
          subTitle: 'User Registered',
          buttons: ['OK']
        }).present();
      }
    ).catch(error=>{
      console.log('error: ',error);
    }

    );
    console.log(this.user.value);
  }

}
