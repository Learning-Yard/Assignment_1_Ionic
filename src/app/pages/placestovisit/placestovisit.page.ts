import { Component, OnInit } from '@angular/core';
// import * as placestoVisit from '../../../assets/json/ptv.json';
import { ModalController } from '@ionic/angular';
import { PlacestovisitformComponent } from 'src/app/components/placestovisitform/placestovisitform.component';
import { DatapasserService } from 'src/app/services/datapasser/datapasser.service';

@Component({
  selector: 'app-placestovisit',
  templateUrl: './placestovisit.page.html',
  styleUrls: ['./placestovisit.page.scss'],
})
export class PlacestovisitPage implements OnInit {
toVisit:any = [];
  constructor(private modalCtrl: ModalController , private dps:DatapasserService) {

  }

  ngOnInit() {
    fetch('../../../assets/json/ptv.json').then(res => res.json())
    .then(json => {
      this.toVisit = json;
      console.log(this.toVisit);
      //let modData = this.dps.ptvmodaltoptvpagedataPasserRecieve();

        this.dps.data.subscribe(val=> {console.log("sub",val)
        if(val.length !== 0){
        this.toVisit.data.push(val[0]);
        console.log(this.toVisit);
        }
        }
        );
      // this.toVisit.data.push(modData[0]);
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlacestovisitformComponent
    });
    return await modal.present();
  }

  delete(i){
    this.toVisit.data.pop(i);
  }

}
