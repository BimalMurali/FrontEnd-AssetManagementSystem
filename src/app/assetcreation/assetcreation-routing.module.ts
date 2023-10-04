import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetcreationListComponent } from './assetcreation-list/assetcreation-list.component';
import { AssetcreationEditComponent } from './assetcreation-edit/assetcreation-edit.component';
import { AssetcreationAddComponent } from './assetcreation-add/assetcreation-add.component';
import { AssetcreationDeleteComponent } from './assetcreation-delete/assetcreation-delete.component';
import { PurchaseorderslistComponent } from '../purchaseorders/purchaseorderslist/purchaseorderslist.component';

const routes: Routes = [
  {path:'list',component:AssetcreationListComponent},
  {path:'edit/:id',component:AssetcreationEditComponent},
  {path:'add',component:AssetcreationAddComponent},
  {path:'delete',component:AssetcreationDeleteComponent},
  {path:'orders',component:PurchaseorderslistComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetcreationRoutingModule { }
