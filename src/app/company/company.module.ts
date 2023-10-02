import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CompanyComponent, VendorListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})

export class CompanyModule { }
