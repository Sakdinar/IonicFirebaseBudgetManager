import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-purchase-overview',
  templateUrl: 'purchase-overview.html',
})
export class PurchaseOverviewPage {
  budget;
  transactions;
  totalSpent;
  totalBills;
  totalSavings;
  totalFood;
  totalMisc;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.budget = navParams.data.userInfo.budget.budget;
    this.transactions = navParams.data.transactions;
  }

  ionViewWillEnter() {
    this.calculateTotalSpent();
    this.calculateCategories();
  }

  calculateTotalSpent() {
    let total = 0;
    for (let i=0; i<this.transactions.length; i++) {
      let thisAmount = this.transactions[i].amount;
      total += thisAmount;
    }

    this.totalSpent = total;
  }

  calculateCategories() {
    const categories = ['beerFund', 'bills', 'food', 'savings'];
    
    for (let i=0; i<categories.length; i++) {
      let transactionsForThisCategory = this.transactions.filter(t => {
        if (t.category == categories[i]) {
          return t.amount;
        }
      }).map(p => { return p.amount });

      let thisTotal = 0;
      if (transactionsForThisCategory.length > 0) {
        thisTotal = transactionsForThisCategory.reduce((acc, purchase) => {
          return acc + purchase;
        })
      }
      
      switch (categories[i]) {
        case 'bills':
          this.totalBills = thisTotal;
          break;
        case 'food':
          this.totalFood = thisTotal;
          break;
        case 'savings': 
          this.totalSavings = thisTotal;
          break;
        case 'beerFund':
          this.totalMisc = thisTotal;
          break;
        default:
          break;
      }
    }
  }

}
