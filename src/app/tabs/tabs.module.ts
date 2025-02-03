import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { HomeComponent } from '../Main Screen Components/home/home.component';
import { AppoinmentsComponent } from '../Main Screen Components/appoinments/appoinments.component';
import { PatientsComponent } from '../Main Screen Components/patients/patients/patients.component';
import { MenuComponent } from '../Main Screen Components/menu/menu.component';
import { AddPatientsComponent } from '../Main Screen Components/patients/add-patients/add-patients.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, HomeComponent, PatientsComponent, AppoinmentsComponent, MenuComponent, AddPatientsComponent]
})
export class TabsPageModule {}
