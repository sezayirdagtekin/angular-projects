import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style:boolean=false;
  homeMessage="";

  constructor(private dataService: DataService) {


   }

  ngOnInit() {
  }

  changeColor(){
    console.log("fist click changeColor");
    this.h1Style=!this.h1Style;
    if(this.h1Style){
    this.homeMessage=this.dataService.getMessage();
    }
    else{
      this.homeMessage="";
    }
  }

}
