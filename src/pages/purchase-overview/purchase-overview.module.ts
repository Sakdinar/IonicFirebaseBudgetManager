import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseOverviewPage } from './purchase-overview';

@NgModule({
  declarations: [
    PurchaseOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseOverviewPage),
  ],
})
export class PurchaseOverviewPageModule {}
