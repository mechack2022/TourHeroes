import { HeroModel } from './../heroes.model';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title="my Heroes"
  selectedHero ? : HeroModel
  heroes !: HeroModel[]; 

  constructor(public heroesService: HeroesService) { }
  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.heroesService.getHeroes()
    .subscribe(heroes=>(this.heroes = heroes))
  }
  onSelect(hero:HeroModel):void{
    this.selectedHero= hero
  }
 

}
