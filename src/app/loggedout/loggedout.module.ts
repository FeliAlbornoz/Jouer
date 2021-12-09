import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedoutPageRoutingModule } from './loggedout-routing.module';

import { LoggedoutPage } from './loggedout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedoutPageRoutingModule
  ],
  declarations: [LoggedoutPage]
})
export class LoggedoutPageModule {}
