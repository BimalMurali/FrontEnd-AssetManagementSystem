import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [ SharedComponent,NotfoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]

})

export class SharedModule { }
