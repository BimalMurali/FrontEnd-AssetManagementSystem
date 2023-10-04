import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetcreationRoutingModule } from './assetcreation-routing.module';
import { AssetcreationComponent } from './assetcreation.component';
import { AssetcreationListComponent } from './assetcreation-list/assetcreation-list.component';
import { AssetcreationEditComponent } from './assetcreation-edit/assetcreation-edit.component';
import { AssetcreationAddComponent } from './assetcreation-add/assetcreation-add.component';
import { AssetcreationDeleteComponent } from './assetcreation-delete/assetcreation-delete.component';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';




@NgModule({
  declarations: [AssetcreationComponent, AssetcreationListComponent, AssetcreationEditComponent, AssetcreationAddComponent, AssetcreationDeleteComponent, OrderListComponent, OrderEditComponent],
  imports: [
    CommonModule,
    AssetcreationRoutingModule,
    FormsModule
  ]
})
export class AssetcreationModule { }
