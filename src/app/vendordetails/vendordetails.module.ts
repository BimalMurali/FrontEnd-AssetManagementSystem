import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendordetailsRoutingModule } from './vendordetails-routing.module';
import { VendordetailsComponent } from './vendordetails.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [VendordetailsComponent, VendorlistComponent, VendoreditComponent, VendoraddComponent, HomeComponent],
  imports: [
    CommonModule,
    VendordetailsRoutingModule,
    FormsModule
  ]
})
export class VendordetailsModule { }
