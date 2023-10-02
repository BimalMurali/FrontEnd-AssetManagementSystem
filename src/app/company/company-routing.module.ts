import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorListComponent} from './vendor-list/vendor-list.component'
import { ViewStatusComponent } from './view-status/view-status.component';

const routes: Routes = [
  {path:'vendorlist',component:VendorListComponent},
  {path:'viewstatus',component:ViewStatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
