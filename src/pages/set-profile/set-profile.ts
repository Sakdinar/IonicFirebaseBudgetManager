import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-set-profile',
  templateUrl: 'set-profile.html',
})
export class SetProfilePage {
  budget;
  income;
 
  constructor(    
    public navParams: NavParams, 
    public navCtrl: NavController,
    public toastCtrl: ToastController, 
    public angFireAuth: AngularFireAuth,
    public angFireDB: AngularFireDatabase
  ) {
  }

  setBudget() {
      const thisUser = this.angFireAuth.auth.currentUser;
      const uid = thisUser.uid;
  
      this.angFireDB
        .database
        .ref('users/' + uid + '/userInfo/budget')
        .set({ 'budget': this.budget })
        .catch(err => {
          console.log("UPDATE BUDGET ERROR", err);
        })

      this.angFireDB
        .database
        .ref('users/' + uid + '/userInfo/income')
        .set({ 'income': this.income })
        .then(() => this.navCtrl.push(MainPage))
        .catch(err => {
          console.log("UPDATE INCOME ERROR", err);
        })
  }
}

