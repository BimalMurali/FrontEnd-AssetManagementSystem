import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseordersRoutingModule } from './purchaseorders-routing.module';
import { PurchaseordersComponent } from './purchaseorders.component';


@NgModule({
  declarations: [PurchaseordersComponent],
  imports: [
    CommonModule,
    PurchaseordersRoutingModule
  ]
})
export class PurchaseordersModule { }
