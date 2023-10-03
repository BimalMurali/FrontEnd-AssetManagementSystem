import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetcreationListComponent } from './assetcreation-list/assetcreation-list.component';
import { AssetcreationEditComponent } from './assetcreation-edit/assetcreation-edit.component';
import { AssetcreationAddComponent } from './assetcreation-add/assetcreation-add.component';
import { AssetcreationDeleteComponent } from './assetcreation-delete/assetcreation-delete.component';

const routes: Routes = [
  {path:'list',component:AssetcreationListComponent},
  {path:'edit',component:AssetcreationEditComponent},
  {path:'add',component:AssetcreationAddComponent},
  {path:'delete',component:AssetcreationDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetcreationRoutingModule { }
