import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseordersRoutingModule } from './purchaseorders-routing.module';
import { PurchaseordersComponent } from './purchaseorders.component';
import { PurchaseorderslistComponent } from './purchaseorderslist/purchaseorderslist.component';
import { PurchaseordersaddComponent } from './purchaseordersadd/purchaseordersadd.component';
import { PurchaseorderseditComponent } from './purchaseordersedit/purchaseordersedit.component';
import { PurchaseordersdeleteComponent } from './purchaseordersdelete/purchaseordersdelete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PurchaseordersComponent, PurchaseorderslistComponent, PurchaseordersaddComponent, PurchaseorderseditComponent, PurchaseordersdeleteComponent],
  imports: [
    CommonModule,
    PurchaseordersRoutingModule,
    FormsModule
  ]
})
export class PurchaseordersModule { }
