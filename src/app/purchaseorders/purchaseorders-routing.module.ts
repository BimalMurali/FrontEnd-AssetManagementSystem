import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseorderslistComponent } from './purchaseorderslist/purchaseorderslist.component';
import { PurchaseorderseditComponent } from './purchaseordersedit/purchaseordersedit.component';
import { PurchaseordersdeleteComponent } from './purchaseordersdelete/purchaseordersdelete.component';
import { PurchaseordersaddComponent } from './purchaseordersadd/purchaseordersadd.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:'list',component:PurchaseorderslistComponent},
  {path:'edit/:id',component:PurchaseorderseditComponent},
  {path:'delete',component:PurchaseordersdeleteComponent},
  {path:'add',component:PurchaseordersaddComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseordersRoutingModule { }
