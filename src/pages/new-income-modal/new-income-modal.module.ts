import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewIncomeModalPage } from './new-income-modal';

@NgModule({
  declarations: [
    NewIncomeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewIncomeModalPage),
  ],
})
export class NewIncomeModalPageModule {}
