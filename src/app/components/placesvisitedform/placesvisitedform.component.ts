import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { DatapasserService } from 'src/app/services/datapasser/datapasser.service';

@Component({
  selector: 'app-placesvisitedform',
  templateUrl: './placesvisitedform.component.html',
  styleUrls: ['./placesvisitedform.component.scss'],
})
export class PlacesvisitedformComponent implements OnInit {

  placesVisited: FormGroup;
  dataPasser:any = [];
  constructor(private router: Router, public toastController: ToastController , private dps:DatapasserService , private modalCtrl: ModalController) {
    this.placesVisited = new FormGroup({
      place: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{2,12}$'),
      ]),
      dateOfJourney: new FormControl('', [
        Validators.required
      ]),
      estimatedCost: new FormControl('', [
        Validators.required,
      ]),
      experience: new FormControl('', [
        Validators.required,
      ]),
      photo: new FormControl('')
    });
  }

  ngOnInit() {}

  submit(){
    // this.dps.pvmodaltoptvpagedataSend()
    let find = this.dataPasser.find(x => x.place == this.placesVisited.value.place )
    if(find){
      this.presentToast('The Place is already in records', 'danger');
    }else{
      this.dataPasser.push(this.placesVisited.value);
      let data:any = [...this.dps.data2.value, this.placesVisited.value];
      this.dps.data2.next(data);
     // [..., this.placesVisited.value]
      console.log("modal" , this.dps.data2.value)
      //this.dps.ptvmodaltoptvpagedataSend(this.dataPasser);
      this.modalCtrl.dismiss();
    }
  console.log(this.dataPasser);
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

  dismiss(){
    this.modalCtrl.dismiss();
  }

  loadImageFromDevice(event) {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = () => {

      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);

    };

    reader.onerror = (error) => {

      //handle errors

    };
    console.log(file);

  }

}
