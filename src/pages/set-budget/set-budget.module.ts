import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetBudgetPage } from './set-budget';

@NgModule({
  declarations: [
    SetBudgetPage,
  ],
  imports: [
    IonicPageModule.forChild(SetBudgetPage),
  ],
})
export class SetBudgetPageModule {}
