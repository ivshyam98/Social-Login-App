import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  email:string;
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  signOut()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
