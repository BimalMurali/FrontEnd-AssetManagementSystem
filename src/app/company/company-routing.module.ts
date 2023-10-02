import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorListComponent} from './vendor-list/vendor-list.component'
import { HomecompanyComponent } from './homecompany/homecompany.component';

const routes: Routes = [
  {path:'vendorlist',component:VendorListComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
