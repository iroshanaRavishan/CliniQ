import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../Main Screen Components/home/home.component';
import { PatientsComponent } from '../Main Screen Components/patients/patients/patients.component';
import { AppoinmentsComponent } from '../Main Screen Components/appoinments/appoinments.component';
import { MenuComponent } from '../Main Screen Components/menu/menu.component';
import { AddPatientsComponent } from '../Main Screen Components/patients/add-patients/add-patients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'appoinments', component: AppoinmentsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'patients/add-patient', component: AddPatientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
