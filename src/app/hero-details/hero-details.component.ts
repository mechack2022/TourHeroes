import { HEROES } from './../mock.hero';
import { HeroModel } from './../heroes.model';
import { HeroesService } from './../heroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
hero  : HeroModel | undefined;

  constructor(
    private route: ActivatedRoute, 
    private heroesService:HeroesService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }   
  getHero():void{
    const id = Number( this.route.snapshot.paramMap.get('id'))
    this.heroesService.getHero(id)
    .subscribe(hero  => this.hero = hero)
    }
    getBack():void{
      this.location.back()
    }

}
