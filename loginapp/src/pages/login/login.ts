import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  
  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create(
      {
        title: 'New Friend!',
        subTitle: message,
        buttons: ['OK']
      }
    ).present();

  }
  SignIn(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value).then(
      data=>{
        console.log('got some data',this.fire.auth.currentUser);
        this.alert('Login Successfull !')
        this.navCtrl.setRoot(LoggedinPage);
      }
    ).catch(
     error=>{
       console.log('got some error',error);
       this.alert(error.message);
     }
      
    );
    console.log('Sign in with',this.user.value,this.password.value);
  }

}
