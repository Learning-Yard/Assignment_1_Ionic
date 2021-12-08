import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DatapasserService } from 'src/app/services/datapasser/datapasser.service';

@Component({
  selector: 'app-placestovisitform',
  templateUrl: './placestovisitform.component.html',
  styleUrls: ['./placestovisitform.component.scss'],
})
export class PlacestovisitformComponent implements OnInit {

  placesToVisit: FormGroup;
  dataPasser:any = [];

  constructor(public toastController: ToastController , private dps:DatapasserService , private modalCtrl: ModalController) {
    this.placesToVisit = new FormGroup({
      place: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{2,12}$'),
      ]),
      preference: new FormControl('', [
        Validators.required,
      ]),
      estimatedCost: new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngOnInit() {

  }


  async presentToast(message, color) {
    const toast = await this.toastController.create({
      // eslint-disable-next-line object-shorthand
      message: message,
      position: 'top',
      // eslint-disable-next-line object-shorthand
      color: color,
      duration: 2000,
      buttons: [
        {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }

  submit(){
    let find = this.dataPasser.find(x => x.place == this.placesToVisit.value.place )
      if(find){
        this.presentToast('The Place is already in records', 'danger');
      }else{
        this.dataPasser.push(this.placesToVisit.value);
        let data:any = [...this.dps.data.value, this.placesToVisit.value];
        this.dps.data.next(data);
       // [..., this.placesToVisit.value]
        console.log("modal" , this.dps.data.value)
        //this.dps.ptvmodaltoptvpagedataSend(this.dataPasser);
        this.modalCtrl.dismiss();
      }
    console.log(this.dataPasser);
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
