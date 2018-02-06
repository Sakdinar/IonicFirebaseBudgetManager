import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-purchase-list',
  templateUrl: 'purchase-list.html',
})
export class PurchaseListPage {
  transactions;
  selectedFilter;
  filteredPurchases;
  rawTransactions;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.selectedFilter = 'none';
    this.setTransactions();
  }

  setTransactions() {
    this.rawTransactions = this.navParams.data.rawTransactions;
    const today = new Date();

    let thisMonth;
    if (today.getMonth() + 1 < 10) { 
      thisMonth = '0' + (today.getMonth() + 1).toString() 
    } else {
      thisMonth = (today.getMonth() + 1).toString();
    }

    this.transactions = this.navParams.data.transactions.filter(t => {
      if (t.date.split('-')[1] == thisMonth) {
        if (t.type == 'expense') { t.amount = t.amount * -1 }
        return t;
      }
    });
    this.filteredPurchases= this.transactions;
  }

  setFilter(selectedFilter) {
    this.selectedFilter = selectedFilter;
    this.filterPurchases(); 
  }

  filterPurchases() {
    if (this.selectedFilter != 'none') {
      this.filteredPurchases = this.transactions.filter(item => {
        if (item.category == this.selectedFilter) {
          return item;
        }
      })
    } else {
      this.filteredPurchases = this.transactions;
    }
  }

}
