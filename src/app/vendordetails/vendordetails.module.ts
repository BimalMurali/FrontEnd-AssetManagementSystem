import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendordetailsRoutingModule } from './vendordetails-routing.module';
import { VendordetailsComponent } from './vendordetails.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';


@NgModule({
  declarations: [VendordetailsComponent, VendorlistComponent, VendoreditComponent],
  imports: [
    CommonModule,
    VendordetailsRoutingModule
  ]
})
export class VendordetailsModule { }
