import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.scss'],
  standalone: false
})
export class AppoinmentsComponent  implements OnInit {

  activeTab: string = 'appoinments';
  
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
}
