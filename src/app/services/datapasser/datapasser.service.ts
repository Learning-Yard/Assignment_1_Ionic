import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapasserService {
  public data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public data2: BehaviorSubject<any[]> = new BehaviorSubject([]);
  data_ptv:any;
  data_pv:any;
  dataPass1:any;
  constructor() {

   }

  ptvmodaltoptvpagedataSend(data){
    this.data_ptv = data;
  }

  pvmodaltoptvpagedataSend(data){
    this.data_pv = data;
  }

  // ptvmodaltoptvpagedataPasserRecieve(){
  //   this.dataPass1 = new BehaviorSubject([]);
  //   return this.dataPass1;
  // }



}
