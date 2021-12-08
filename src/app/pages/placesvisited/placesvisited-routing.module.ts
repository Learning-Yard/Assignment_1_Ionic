import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesvisitedPage } from './placesvisited.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesvisitedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesvisitedPageRoutingModule {}
