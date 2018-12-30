import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {


  hero: Hero = {
    id: 5,
    name:'Windstorm'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
