import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private auth:AuthService) { }

  checkCredentials(_username,_password){
    this.auth.checkCredentials(_username,_password);
    // console.log (_username,_password);
  }

}
