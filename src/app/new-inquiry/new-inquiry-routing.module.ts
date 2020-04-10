import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewInquiryPage } from './new-inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: NewInquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewInquiryPageRoutingModule {}
