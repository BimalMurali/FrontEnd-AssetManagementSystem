import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetdefinitionRoutingModule } from './assetdefinition-routing.module';
import { AssetdefinitionComponent } from './assetdefinition.component';


@NgModule({
  declarations: [AssetdefinitionComponent],
  imports: [
    CommonModule,
    AssetdefinitionRoutingModule
  ]
})
export class AssetdefinitionModule { }
