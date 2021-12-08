import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hero = 0;
  loggedIn = false;
  userName = '';
  userData;
  userDB;

  constructor() {
    this.userDB = JSON.parse(localStorage.getItem('userData'));
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.userDB.forEach(element => {
      if(element.name == this.userName){
        this.loggedIn = true;
        this.userData = element;
      }
    });

    console.log(this.userData);
    console.log(this.userDB);

  }
}
