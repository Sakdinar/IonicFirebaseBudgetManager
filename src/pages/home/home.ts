import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  redirect(pageName) {
    switch (pageName) {
      case 'SignInPage':
        this.navCtrl.push(SignInPage);
        break;
      case 'SignUpPage':
        this.navCtrl.push(SignUpPage);
        break;
      default:
        break;
    }
  }

}
 