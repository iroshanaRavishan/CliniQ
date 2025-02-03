import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  standalone: false
})
export class PatientsComponent  implements OnInit {

  activeTab: string = 'patients';
  patientList = [
    {
        "id": "1",
        "name": "Tommy Jerram",
        "gender": "M",
        "age": "22",
        "height": "132",
        "weight": "52",
        "mobile" :  "(44) 550-12-8481",
        "profileImage": "Bessie"
    },
    {
      "id": "2",
      "name": "Marvin McKinney",
      "gender": "M",
      "age": "27",
      "height": "127",
      "weight": "85",
      "mobile" :  "(44) 570-12-8482",
      "profileImage": "Kathryn"
    },
    {
      "id": "3",
      "name": "Guy Hawkins",
      "gender": "M",
      "age": "33",
      "height": "125",
      "weight": "106",
      "mobile" :  "(44) 570-12-8483",
      "profileImage": "Ralph"
    },
    {
      "id": "4",
      "name": "Kathryn Murphy",
      "gender": "M",
      "age": "28",
      "height": "148",
      "weight": "86",
      "mobile" :  "(44) 570-12-8484",
      "profileImage": "Guy"
    },
    {
      "id": "5",
      "name": "Bessie Cooper",
      "gender": "M",
      "age": "48",
      "height": "148",
      "weight": "76",
      "mobile" :  "(44) 570-12-8484",
      "profileImage": "Tommy"
    },
    {
      "id": "6",
      "name": "Ralph Edwards",
      "gender": "M",
      "age": "54",
      "height": "136",
      "weight": "90",
      "mobile" :  "(44) 570-12-8486",
      "profileImage": "Marvin"
    },
    {
      "id": "7",
      "name": "Kathryn Murphy",
      "gender": "M",
      "age": "28",
      "height": "148",
      "weight": "86",
      "mobile" :  "(44) 570-12-8484",
      "profileImage": "Guy"
    },
  ]
  
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

  navigateToAddNewPatient(){
    this.router.navigate(['tabs/patients/add-patient']);
  }
}




