import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordPageRoutingModule } from './password-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordOtpViewComponent } from './forget-password-otp-view/forget-password-otp-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordPageRoutingModule
  ],
  declarations: [ForgetPasswordComponent, ResetPasswordComponent, ForgetPasswordOtpViewComponent]
})
export class PasswordPageModule {}
