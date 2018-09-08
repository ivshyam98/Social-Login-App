import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 facebook = {
   name : ' ',
   img : '',
   email: '',
   fbloggedin : false

 }
 google = {
  name : ' ',
  img : '',
  email: '',
  googleloggedin : false

}
  constructor(private fire:AngularFireAuth, public navCtrl: NavController) {

  }
  
  SignIn()
  {
   this.navCtrl.push(LoginPage);
  }
  register()
  {
   this.navCtrl.push(RegisterPage);
  }

  SignInWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then
    (res=>{
      console.log(res);
      this.facebook.fbloggedin=true;
      this.facebook.name=res.user.displayName;
      this.facebook.img=res.user.photoURL;
      this.facebook.email=res.user.email;
    }
    );
  }

  SignOutFb(){
this.fire.auth.signOut();
this.facebook.fbloggedin=false;
  }

  
  SignInWithGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then
    (res=>{
      console.log(res);
      this.google.googleloggedin=true;
      this.google.name=res.user.displayName;
      this.google.img=res.user.photoURL;
      this.google.email=res.user.email;
    }
    );
  }

  SignOutGoogle(){
this.fire.auth.signOut();
this.google.googleloggedin=false;
  }


}
