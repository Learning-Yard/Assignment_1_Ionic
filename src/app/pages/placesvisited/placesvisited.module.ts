import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesvisitedPageRoutingModule } from './placesvisited-routing.module';

import { PlacesvisitedPage } from './placesvisited.page';
import { PlacesvisitedformComponent } from 'src/app/components/placesvisitedform/placesvisitedform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesvisitedPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlacesvisitedPage , PlacesvisitedformComponent]
})
export class PlacesvisitedPageModule {}
