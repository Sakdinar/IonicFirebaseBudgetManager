import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetProfilePage } from './set-profile';

@NgModule({
  declarations: [
    SetProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SetProfilePage),
  ],
})
export class SetProfilePageModule {}
