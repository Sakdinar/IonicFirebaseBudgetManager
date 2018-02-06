import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SetBudgetPage } from '../pages/set-budget/set-budget';
import { PurchaseListPage } from '../pages/purchase-list/purchase-list';
import { ExtraMoneyPage } from '../pages/extra-money/extra-money';
import { PurchaseEntryPage } from '../pages/purchase-entry/purchase-entry';
import { PurchaseOverviewPage } from '../pages/purchase-overview/purchase-overview';
import { NewPurchaseModalPage } from '../pages/new-purchase-modal/new-purchase-modal';

//-----AngularFire2 Setup-----
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAT3Hm4cnmOipldb71e0C5MQ-P9K8Mjp3U",
  authDomain: "budget-manager-34163.firebaseapp.com",
  databaseURL: "https://budget-manager-34163.firebaseio.com",
  projectId: "budget-manager-34163",
  storageBucket: "budget-manager-34163.appspot.com",
  messagingSenderId: "394432996728"
};
//----------

@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    MainPage,
    SignInPage,
    SignUpPage,
    SetBudgetPage,
    ExtraMoneyPage,
    PurchaseListPage,
    PurchaseEntryPage,
    PurchaseOverviewPage,
    NewPurchaseModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SignInPage,
    SignUpPage,
    SetBudgetPage,
    ExtraMoneyPage,
    PurchaseListPage,
    PurchaseEntryPage,
    PurchaseOverviewPage,
    NewPurchaseModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
