import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AuthModule { }
