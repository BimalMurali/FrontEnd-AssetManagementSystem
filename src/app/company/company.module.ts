import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ViewStatusComponent } from './view-status/view-status.component';
=======
import { HomecompanyComponent } from './homecompany/homecompany.component';
>>>>>>> 16158538eefc2c1999e408586539fdc8745afd78



@NgModule({
  declarations: [CompanyComponent, VendorListComponent, ViewStatusComponent,HomecompanyComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})

export class CompanyModule { }
