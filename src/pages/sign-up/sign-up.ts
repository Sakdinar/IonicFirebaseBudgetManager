import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { SetProfilePage } from '../set-profile/set-profile';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email;
  password;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController, 
    public angFireAuth: AngularFireAuth
  ) {
  }

  handleSignUp() {
    this.angFireAuth
      .auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => this.navCtrl.push(SetProfilePage))
      .catch(err => {
        console.log("SIGN UP ERROR", err);
      })
  }
}
