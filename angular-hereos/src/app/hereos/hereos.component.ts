import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HEADER_OFFSET } from '@angular/core/src/render3/interfaces/view';


@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {

selectedHero:Hero;

  hero: Hero = {
    id: 5,
    name:'Windstorm'
  };
  
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }



  onSelect(hero:Hero) :void{
    this.selectedHero=hero;
  }


}
