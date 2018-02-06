import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { HomePage } from '../home/home';
import { SetBudgetPage } from '../set-budget/set-budget';
import { ExtraMoneyPage } from '../extra-money/extra-money';
import { PurchaseListPage } from '../purchase-list/purchase-list';
import { PurchaseEntryPage } from '../purchase-entry/purchase-entry';
import { PurchaseOverviewPage } from '../purchase-overview/purchase-overview';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {
  userInfo;

  setBudget: any;
  extraMoney: any;
  purchaseList: any;
  purchaseEntry: any;
  purchaseOverview: any;


  constructor(
    public events: Events,
    public navParams: NavParams,
    public navCtrl: NavController, 
    public angFireAuth: AngularFireAuth,
    public angFireDB: AngularFireDatabase
  ) {
    this.fetchUserData();
    this.setBudget = SetBudgetPage;
    this.extraMoney = ExtraMoneyPage;
    this.purchaseList = PurchaseListPage;
    this.purchaseEntry = PurchaseEntryPage;
    this.purchaseOverview = PurchaseOverviewPage;

    events.subscribe('purchases:created', (data) => {
      this.fetchUserData();
    })
  }

  fetchUserData() {
    this.angFireAuth
      .auth
      .onAuthStateChanged(user => {
        if (!user) {
          this.navCtrl.push(HomePage);
        } else {
          const thisUser = this.angFireAuth.auth.currentUser;
          const uid = thisUser.uid;

          this.angFireDB
            .database
            .ref('users/' + uid)
            .on('value', snapshot => {
              this.userInfo = snapshot.val();

              const transactions = [];
              const allTransactions = this.userInfo.transactions;
              this.userInfo.rawTransactions = allTransactions;
              for (let prop in this.userInfo.transactions) {
                transactions.push({
                  'amount': allTransactions[prop].amount,
                  'category': allTransactions[prop].category,
                  'date': allTransactions[prop].date,
                  'name': allTransactions[prop].name,
                  'type': allTransactions[prop].type
                }) 
              }
              this.userInfo.transactions = transactions;
            });
        }
      })
  }

}
 