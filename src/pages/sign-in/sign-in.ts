import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})

export class SignInPage {
  email;
  password;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    public angFireAuth: AngularFireAuth
  ) {}

  ionViewWillLoad() {
    this.angFireAuth
      .auth
      .onAuthStateChanged(user => {
        if (user) {
          this.navCtrl.push(MainPage);
        }
      })
  }

  handleSignIn() {
    this.angFireAuth
      .auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => this.navCtrl.push(MainPage))
      .catch(err => {
        console.log("SIGN IN ERROR", err);
      })
  }
}
