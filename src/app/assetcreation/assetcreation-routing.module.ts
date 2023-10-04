import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetcreationListComponent } from './assetcreation-list/assetcreation-list.component';
import { AssetcreationEditComponent } from './assetcreation-edit/assetcreation-edit.component';
import { AssetcreationAddComponent } from './assetcreation-add/assetcreation-add.component';
import { AssetcreationDeleteComponent } from './assetcreation-delete/assetcreation-delete.component';
import { PurchaseorderslistComponent } from '../purchaseorders/purchaseorderslist/purchaseorderslist.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import {HomeComponent} from './home/home.component'
import { AuthGuard } from '../auth/auth.guard';



const routes: Routes = [
  {path:'list',component:AssetcreationListComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'edit/:id',component:AssetcreationEditComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'add',component:AssetcreationAddComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'delete',component:AssetcreationDeleteComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'orders',component:OrderListComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'orderedit/:id',component:OrderEditComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard],data:{role:'4'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetcreationRoutingModule { }
