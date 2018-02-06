import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-extra-money',
  templateUrl: 'extra-money.html',
})
export class ExtraMoneyPage {
  budget;
  income;
  beerFund;
  transactions;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.budget = navParams.data.userInfo.budget.budget;
    this.income = navParams.data.userInfo.income.income;
    this.transactions = navParams.data.transactions;
  }

  ionViewWillLoad() {
    this.calculateSpendingMoney();
  }  

  calculateSpendingMoney() {
    let total = 0;
    for (let i=0; i<this.transactions.length; i++) {
      let thisAmount = this.transactions[i].amount;
      if (this.transactions[i].type == 'expense') {
        total -= thisAmount;
      } else {
        total += thisAmount;
      }
    }
    
    this.beerFund = (this.income / 12 * .73) - total;
  }

}
