import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetcreationRoutingModule } from './assetcreation-routing.module';
import { AssetcreationComponent } from './assetcreation.component';


@NgModule({
  declarations: [AssetcreationComponent],
  imports: [
    CommonModule,
    AssetcreationRoutingModule
  ]
})
export class AssetcreationModule { }
