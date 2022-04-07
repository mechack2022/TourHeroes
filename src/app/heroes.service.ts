import { HEROES } from './mock.hero';
import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroModel } from './heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
// hero : HeroModel[] = []
  constructor(private messageService:MessagesService) { }


  getHeroes():Observable<HeroModel[]>{
   this.messageService.addMessages(`hero-services: heroes fetched`)
   return of(HEROES)
  }
 
  getHero(id:number): Observable<HeroModel>{  
    const hero = HEROES.find(hero => hero.id === id)!;            
     this.messageService.addMessages(`HeroService fetcted hero ${id}`);
      return of(hero)

}
}
