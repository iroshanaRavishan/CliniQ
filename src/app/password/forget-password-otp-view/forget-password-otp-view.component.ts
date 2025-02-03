import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-otp-view',
  templateUrl: './forget-password-otp-view.component.html',
  styleUrls: ['./forget-password-otp-view.component.scss'],
  standalone: false
})
export class ForgetPasswordOtpViewComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToBack() {
    this.router.navigate(['/password']);
  }

  navigateToResetPassword() {
    this.router.navigate(['/password/reset-passwrod']);
  }
}
