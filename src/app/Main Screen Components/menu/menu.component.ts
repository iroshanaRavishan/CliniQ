import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent  implements OnInit {
  
  activeTab: string = 'menu';

  constructor( private router: Router ) { }

  ngOnInit() {}

  navigateToHome(){
    this.router.navigate(['tabs/home']);
  }

  navigateToPatients(){
    this.router.navigate(['tabs/patients']);
  }

  navigateToAppoinment(){
    this.router.navigate(['tabs/appoinments']);
  }

  navigateToMenu(){
    this.router.navigate(['tabs/menu']);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  logout(){
  // Remove the logged-in user from localStorage
  localStorage.removeItem('loggedInUser');

  // Optionally, you can redirect to the login page or auth section
  this.router.navigate(['auth']);
  }
}
