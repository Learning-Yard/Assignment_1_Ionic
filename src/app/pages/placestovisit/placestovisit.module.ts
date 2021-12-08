import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacestovisitPageRoutingModule } from './placestovisit-routing.module';

import { PlacestovisitPage } from './placestovisit.page';
import { PlacestovisitformComponent } from 'src/app/components/placestovisitform/placestovisitform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacestovisitPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlacestovisitPage , PlacestovisitformComponent]
})
export class PlacestovisitPageModule {}
