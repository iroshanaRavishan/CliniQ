import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: false
})
export class ResetPasswordComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToBack() {
    this.router.navigate(['/password/verify-otp']);
  }
}
