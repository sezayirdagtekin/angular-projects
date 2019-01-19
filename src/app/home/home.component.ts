import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  changeColor(){
    console.log("fist click changeColor");
    this.h1Style=!this.h1Style;
  }

}
