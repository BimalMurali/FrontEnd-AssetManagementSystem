import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseordersRoutingModule } from './purchaseorders-routing.module';
import { PurchaseordersComponent } from './purchaseorders.component';
import { PurchaseorderslistComponent } from './purchaseorderslist/purchaseorderslist.component';
import { PurchaseordersaddComponent } from './purchaseordersadd/purchaseordersadd.component';
import { PurchaseorderseditComponent } from './purchaseordersedit/purchaseordersedit.component';
import { PurchaseordersdeleteComponent } from './purchaseordersdelete/purchaseordersdelete.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [PurchaseordersComponent, PurchaseorderslistComponent, PurchaseordersaddComponent, PurchaseorderseditComponent, PurchaseordersdeleteComponent],
  imports: [
    CommonModule,
    PurchaseordersRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class PurchaseordersModule { }
