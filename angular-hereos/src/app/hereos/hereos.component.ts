import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    console.log("call ngOnInit...");
      this.getHeroes();
    console.log("ngOnInit is completed...");
  }

  
  onSelect(hero:Hero) :void{
    this.selectedHero=hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
