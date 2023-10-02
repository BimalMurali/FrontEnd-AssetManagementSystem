import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorListComponent} from './vendor-list/vendor-list.component'
import { ViewStatusComponent } from './view-status/view-status.component';
import { HomecompanyComponent } from './homecompany/homecompany.component';


const routes: Routes = [
  {path:'vendorlist',component:VendorListComponent},
  {path:'viewstatus',component:ViewStatusComponent},
  {path:'vendorlist',component:VendorListComponent},
  {path:'homecompany',component:HomecompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
