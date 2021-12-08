import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from 'src/app/services/loginservice/loginservice.service';
// import * as cred from '../../assets/json/user.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm = new FormGroup({
    Username: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
    Password: new FormControl((''),[Validators.required,Validators.pattern('[a-zA-Z\s]+')]),
  });

  constructor(private login:LoginserviceService) { }
  cred:any;
  usercreds:any;

  ngOnInit() {
    this.getData();
  }

  getData(){
    fetch("../../assets/json/user.json").then(res=>res.json()).then(json=>{
      console.log("OUTPUT: ", json);
      //DO YOUR STAFF
  });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.LoginForm.value);
    this.usercreds = this.cred;
    this.checkCredentials(this.LoginForm.value.Username,this.LoginForm.value.Password);
  }

  checkCredentials(_username,_password){
    // console.log(_username,_password);
    this.login.checkCredentials(_username,_password);
  }

}
