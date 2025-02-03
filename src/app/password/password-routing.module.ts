import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPasswordOtpViewComponent } from './forget-password-otp-view/forget-password-otp-view.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  { path: '', component: ForgetPasswordComponent },
  { path: 'verify-otp', component: ForgetPasswordOtpViewComponent },
  { path: 'reset-passwrod', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordPageRoutingModule {}
