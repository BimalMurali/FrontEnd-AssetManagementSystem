import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
