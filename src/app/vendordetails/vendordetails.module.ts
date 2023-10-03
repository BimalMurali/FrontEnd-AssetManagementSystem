import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendordetailsRoutingModule } from './vendordetails-routing.module';
import { VendordetailsComponent } from './vendordetails.component';


@NgModule({
  declarations: [VendordetailsComponent],
  imports: [
    CommonModule,
    VendordetailsRoutingModule
  ]
})
export class VendordetailsModule { }
