import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {
    path: 'list',
    component: VendorlistComponent
  },
  {
    path: 'edit/id',
    component: VendoreditComponent
  },
  {
    path: 'add',
    component: VendoraddComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendordetailsRoutingModule { }
