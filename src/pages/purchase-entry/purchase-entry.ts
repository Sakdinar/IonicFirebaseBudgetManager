import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { NewIncomeModalPage } from '../new-income-modal/new-income-modal';
import { NewPurchaseModalPage } from '../new-purchase-modal/new-purchase-modal';

@IonicPage() 
@Component({
  selector: 'page-purchase-entry',
  templateUrl: 'purchase-entry.html',
})

export class PurchaseEntryPage {
  transactions;
  selectedFilter;
  filteredPurchases;

  constructor(
    public events: Events,
    public navParams: NavParams, 
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public angFireAuth: AngularFireAuth,
    public angFireDB: AngularFireDatabase
  ) {
    this.selectedFilter = 'none';
    if (this.navParams.data.transactions) {
      this.transactions = this.navParams.data.transactions;
      this.filteredPurchases= [];
    }
  }

  presentModal(modalType) {
    let modal;
    if (modalType == 'expense') {
      modal = this.modalCtrl.create(NewPurchaseModalPage);
      
      modal.onDidDismiss(transaction => {
        if (
          transaction &&
          transaction.date && 
          transaction.name && 
          transaction.amount &&
          transaction.category
        ) {
          transaction.amount = parseFloat(transaction.amount);
          transaction.type = 'expense';
          this.pushPurchaseToDB(transaction);

          this.events.publish('purchases:created', transaction);
        }
      })
    } else {
      modal = this.modalCtrl.create(NewIncomeModalPage);
      
      modal.onDidDismiss(transaction => {
        if (
          transaction &&
          transaction.date && 
          transaction.name && 
          transaction.amount
        ) {
          transaction.amount = parseFloat(transaction.amount);
          transaction.type = 'income';
          this.pushPurchaseToDB(transaction);

          this.events.publish('purchases:created', transaction);
        }
      }) 
    }

    modal.present();
  }

  pushPurchaseToDB(purchase) {
    const thisUser = this.angFireAuth.auth.currentUser;
    const uid = thisUser.uid;

    this.angFireDB
      .database
      .ref('users/' + uid + '/transactions')
      .push(purchase)
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
