import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlacesvisitedformComponent } from 'src/app/components/placesvisitedform/placesvisitedform.component';
import { DatapasserService } from 'src/app/services/datapasser/datapasser.service';

@Component({
  selector: 'app-placesvisited',
  templateUrl: './placesvisited.page.html',
  styleUrls: ['./placesvisited.page.scss'],
})
export class PlacesvisitedPage implements OnInit {

  visited:any = [];
  constructor(private modalCtrl: ModalController , private dps:DatapasserService) { }

  ngOnInit() {
    fetch('../../../assets/json/pv.json').then(res => res.json())
    .then(json => {
      this.visited = json;
      console.log(this.visited);
      //let modData = this.dps.ptvmodaltoptvpagedataPasserRecieve();

        this.dps.data2.subscribe(val=> {console.log("sub",val)
        if(val.length !== 0){
        this.visited.data.push(val[0]);
        console.log(this.visited);
        }
        }
        );
      // this.toVisit.data.push(modData[0]);
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PlacesvisitedformComponent
    });
    return await modal.present();
  }

}
