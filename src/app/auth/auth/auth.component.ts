import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: false,
})
export class AuthComponent implements OnInit {
  constructor(private router: Router, private storageService: LocalStorageService) {}

  ngOnInit() {
    // Add a default user when the AuthComponent loads
    this.storageService.addUser('nadun@gmail.com', 'NadunV', 'Nadun Vihanga');
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/auth/signup']);
  }
}
