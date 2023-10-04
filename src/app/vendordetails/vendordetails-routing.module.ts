import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendordetailsRoutingModule { }
