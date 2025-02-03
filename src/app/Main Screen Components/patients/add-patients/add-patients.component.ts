import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss'],
  standalone: false
})
export class AddPatientsComponent  implements OnInit {

  Items =["Basic Information", "Problem" , "Health Matrics", "Priscriptions", "Medical Records"]
  constructor( private router: Router ) { }
  selectedItem= "Basic Information";
  
  ngOnInit() {}

    activeTab: string = 'patients';

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
  
    navigateToBack(){
      this.router.navigate(['tabs/patients']);
    }

    selectBioInfo(item: string) {
      this.selectedItem = item;
    }
}
