import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-purchase-modal',
  templateUrl: 'new-purchase-modal.html',
})
export class NewPurchaseModalPage {
  newPurchase = {
    name: null,
    date: null,
    category: null,
    amount: null
  };
  
  constructor(
    public navParams: NavParams, 
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public toastCtrl: ToastController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitNewPurchase() {
    if (
      this.newPurchase.name &&
      this.newPurchase.date &&
      this.newPurchase.amount &&
      this.newPurchase.category
    ) {
      this.viewCtrl.dismiss(this.newPurchase);
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
