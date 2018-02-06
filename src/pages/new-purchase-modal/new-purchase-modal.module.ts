import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPurchaseModalPage } from './new-purchase-modal';

@NgModule({
  declarations: [
    NewPurchaseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPurchaseModalPage),
  ],
})
export class NewPurchaseModalPageModule {}
