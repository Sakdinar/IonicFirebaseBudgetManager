import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-set-budget',
  templateUrl: 'set-budget.html',
})
export class SetBudgetPage {
  budget;
  income;

  constructor(    
    public navParams: NavParams, 
    public navCtrl: NavController,
    public toastCtrl: ToastController, 
    public angFireAuth: AngularFireAuth,
    public angFireDB: AngularFireDatabase
  ) {
    this.budget = navParams.data.userInfo.budget.budget;
    this.income = navParams.data.userInfo.income.income;
  }

  updateBudget() {
      const thisUser = this.angFireAuth.auth.currentUser;
      const uid = thisUser.uid;
  
      this.angFireDB
        .database
        .ref('users/' + uid + '/userInfo/budget')
        .set({ 'budget': this.budget })
        .then(() => this.toastCtrl.create({
          message: 'Budget Updated',
          duration: 2500
        }))
        .catch(err => {
          console.log("UPDATE BUDGET ERROR", err);
        })

      this.angFireDB
        .database
        .ref('users/' + uid + '/userInfo/income')
        .set({ 'income': this.income })
        .then(() => this.toastCtrl.create({
          message: 'Budget Updated',
          duration: 2500
        })) 
        .catch(err => {
          console.log("UPDATE INCOME ERROR", err);
        })
  }
}
