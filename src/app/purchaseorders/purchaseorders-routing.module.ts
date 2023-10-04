import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseorderslistComponent } from './purchaseorderslist/purchaseorderslist.component';
import { PurchaseorderseditComponent } from './purchaseordersedit/purchaseordersedit.component';
import { PurchaseordersdeleteComponent } from './purchaseordersdelete/purchaseordersdelete.component';
import { PurchaseordersaddComponent } from './purchaseordersadd/purchaseordersadd.component';
import {HomeComponent} from './home/home.component'
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'list',component:PurchaseorderslistComponent,canActivate:[AuthGuard],data:{role:'3'}},
  {path:'edit/:id',component:PurchaseorderseditComponent,canActivate:[AuthGuard],data:{role:'3'}},
  {path:'delete',component:PurchaseordersdeleteComponent,canActivate:[AuthGuard],data:{role:'3'}},
  {path:'add',component:PurchaseordersaddComponent,canActivate:[AuthGuard],data:{role:'3'}},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard],data:{role:'3'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseordersRoutingModule { }
