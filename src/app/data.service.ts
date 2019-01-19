import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message :string="Sezayir";
  constructor() { }

 public  getMessage(){
    return this.message;
  }
}
