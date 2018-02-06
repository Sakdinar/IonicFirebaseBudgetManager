import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-income-modal',
  templateUrl: 'new-income-modal.html',
})
export class NewIncomeModalPage {
  newIncome;

  constructor(
    public navParams: NavParams, 
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public toastCtrl: ToastController
  ) {
    this.newIncome = {
      date: null,
      amount: null
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitNewIncome() {
    if (
      this.newIncome.name &&
      this.newIncome.date &&
      this.newIncome.amount
    ) {
      this.viewCtrl.dismiss(this.newIncome);
    } else {
      this.presentToast('Please fill out all fields', 'top');
    }
  }

  presentToast(message, position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: position
    });
  
    toast.present();
  }

}
