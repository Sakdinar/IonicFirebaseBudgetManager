import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseEntryPage } from './purchase-entry';

@NgModule({
  declarations: [
    PurchaseEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseEntryPage),
  ],
})
export class PurchaseEntryPageModule {}
