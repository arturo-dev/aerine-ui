import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleButtonComponent } from './google-button/google-button.component';

@NgModule({
  declarations: [LoginComponent, GoogleButtonComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
