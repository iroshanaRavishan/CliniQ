import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  standalone: false
})
export class ForgetPasswordComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToBack() {
    this.router.navigate(['/auth/login']);
  }

  navigateToVerifyPassword() {
    this.router.navigate(['/password/verify-otp']);
  }
}
