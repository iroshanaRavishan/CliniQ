import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent  implements OnInit {
  userName: string = 'Guest';
  activeTab: string = 'home';

  constructor( private router: Router ) { }


   ngOnInit() {
     const storedUser = localStorage.getItem('loggedInUser');
     if (storedUser) {
       this.userName = JSON.parse(storedUser).name;
     }
   }

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

}
