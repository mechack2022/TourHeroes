import { HeroModel } from './../heroes.model';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes :HeroModel[]=[]
  constructor(public heroesService : HeroesService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes():void{
    this.heroesService.getHeroes().subscribe(heroes=> this.heroes = heroes.slice(1, 5) )
  }

}
