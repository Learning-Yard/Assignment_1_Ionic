import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  userName:string;
  constructor(private route:Router) { }

  ngOnInit() {
    this.userName = localStorage.getItem("username");
  }

goto(num){
  if(num===1){
    this.route.navigate(['/placestovisit']);
  }else{
    this.route.navigate(['/placesvisited']);
  }
}

Logout(){
  localStorage.removeItem("username");
  this.route.navigate(['/login']);
}

}
