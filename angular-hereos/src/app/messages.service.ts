import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: String []=[];

  add(msgText: String){
    this.messages.push(msgText);
  }

  clear(){
      this.messages=[];
  }
  constructor() { }
}
