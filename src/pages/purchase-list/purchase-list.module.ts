import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseListPage } from './purchase-list';

@NgModule({
  declarations: [
    PurchaseListPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseListPage),
  ],
})
export class PurchaseListPageModule {}
