import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private storageService: LocalStorageService) { }

  ngOnInit() {}

  navigateToForgotPassword() {
    this.router.navigate(['/password']);
  }

  navigateToSignUp() {
    this.router.navigate(['/auth/signup']);
  }


  login() {
    if (this.email && this.password) {
      const isValid = this.storageService.validateUser(this.email, this.password);

      if (isValid) {
        
          const user = this.storageService.getUserByEmail(this.email);
      
          if (user && user.password === this.password) {
            
            // Store the logged-in user
            this.storageService.setLoggedUser(user.email, user.password, user.name);
          }
      
        this.router.navigate(['/tabs']); // Redirect to main dashboard
      } else {
        alert('Invalid email or password. Try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  }
}
