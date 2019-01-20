import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message :string="Sezayir";
  constructor(private httpClient: HttpClient) { }

 public  getMessage(){
    return this.message;
  }


  
 public  getUsers(){
  return this.httpClient.get('https://reqres.in/api/users')
  }
}
