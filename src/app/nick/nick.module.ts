import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NickPageRoutingModule } from './nick-routing.module';

import { NickPage } from './nick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NickPageRoutingModule
  ],
  declarations: [NickPage]
})
export class NickPageModule {}
