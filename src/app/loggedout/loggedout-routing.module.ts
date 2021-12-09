import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedoutPage } from './loggedout.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedoutPageRoutingModule {}
