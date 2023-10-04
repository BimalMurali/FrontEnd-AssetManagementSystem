import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetcreationRoutingModule } from './assetcreation-routing.module';
import { AssetcreationComponent } from './assetcreation.component';
import { AssetcreationListComponent } from './assetcreation-list/assetcreation-list.component';
import { AssetcreationEditComponent } from './assetcreation-edit/assetcreation-edit.component';
import { AssetcreationAddComponent } from './assetcreation-add/assetcreation-add.component';
import { AssetcreationDeleteComponent } from './assetcreation-delete/assetcreation-delete.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [AssetcreationComponent, AssetcreationListComponent, AssetcreationEditComponent, AssetcreationAddComponent, AssetcreationDeleteComponent, OrderListComponent, OrderEditComponent, HomeComponent],
  imports: [
    CommonModule,
    AssetcreationRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AssetcreationModule { }
