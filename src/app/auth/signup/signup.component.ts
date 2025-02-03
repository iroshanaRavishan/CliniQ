import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false
})
export class SignupComponent  implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private storageService: LocalStorageService) {}

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  signUp() {

    // Proceed with the sign-up process if the checkbox is checked
    if (this.email && this.password) {
      const isAdded = this.storageService.addUser(this.email, this.password, this.name);

      if (isAdded) {
        console.log('User added successfully:', this.email);
        this.router.navigate(['/auth/login']);
      } else {
        alert('Email already exists. Please use a different email.');
      }
    } else {
      alert('Please enter both email and password.');
    }
  }
}
