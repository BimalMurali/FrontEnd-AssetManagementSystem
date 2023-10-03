import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
// import { VendorListComponent } from './vendor-list/vendor-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewStatusComponent } from './view-status/view-status.component';
import { HomecompanyComponent } from './homecompany/homecompany.component';



@NgModule({
  declarations: [CompanyComponent, ViewStatusComponent,HomecompanyComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})

export class CompanyModule { }
