import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) { }

  RegForm = new FormGroup({
    Email: new FormControl((''),[Validators.required,Validators.email]),
    Username: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
    Password: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
    confirmPassword: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
    dob: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit() {
  }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.log(this.RegForm.value);
  //   alert("Sucessfully Registered");
  // }

  async presentToast(message,color) {
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
          }
        }
      ]
    });
    toast.present();
  }

  getDate(e) {
    const date = new Date(e.target.value);
    const today = new Date();

    if(date >= today){
      this.RegForm.controls.dob.setErrors({dateExceed: 'text of the error'});
    }
  }


  onSubmit(){
    const userData = {
      name:this.RegForm.value.Name,
      email:this.RegForm.value.Email,
      password:this.RegForm.value.Password,
      confirmpassword:this.RegForm.value.confirmPassword,
      dob:this.RegForm.value.dob,
      placesToVisit : [],
      placesVisited : []
    };

    // console.log(localStorage.getItem('userData'));
    if(localStorage.getItem('userData') == null || localStorage.getItem('userData').length === 0 ){
      const a = [];
      a.push(userData);
      localStorage.setItem('userData',JSON.stringify(a));
      this.presentToast('Registered Successfully','success');
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 2000);
    } else{
      let emailPresent = false;
      const data  = JSON.parse(localStorage.getItem('userData'));
      console.log('data found:',data);
      data.forEach(element => {
        if(element.Email === userData.email){
          // alert('email present');
          this.presentToast('Email already registered','danger');
          emailPresent = true;
        }
      });

      if(!emailPresent){
        data.push(userData);
        localStorage.setItem('userData',JSON.stringify(data));
        this.presentToast('Registered Successfully','success');
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      }

    }
  }

}
