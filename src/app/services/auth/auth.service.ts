import { Injectable } from '@angular/core';
// import * as cred from '../../../../assets/json/user.json';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cred:any;
  constructor(private routes : Router , public toastController: ToastController) {
    fetch("../../assets/json/user.json").then(res=>res.json()).then(json=>{
      //DO YOUR STAFF
      this.cred = json;
  });
  }
  username:string;
  role:string;
  isLogout:boolean;
  checkCredentials(username,password){
    let usercred =  this.cred.data.find(x=> x.user == username && x.pass == password)
      if (usercred){
        this.username = username;
        console.log(this.username);
        localStorage.setItem("username",this.username);
        this.presentToast('Login Successful', 'success');
        this.routes.navigate(['/homepage']);
      }else{
        this.presentToast('User Doesnt exist ', 'danger');
        this.routes.navigate(['/login']);
      }
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

}

