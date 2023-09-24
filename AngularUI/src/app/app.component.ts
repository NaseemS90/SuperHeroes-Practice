import { Component } from '@angular/core';
import { SuperHero } from './Models/SuperHero';
import { SuperHeroService } from './MyServices/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private superHeroService: SuperHeroService) {}
  title = 'AngularUI';
  heroToEdit?: SuperHero;

  heroes: SuperHero[] = [];

  ngOnInit(): void {

    this.superHeroService.getSuperHeroes()
    .subscribe((result: SuperHero[]) => this.heroes = result)
  }
  createHero(){

    this.heroToEdit = new SuperHero();
  }

  updateHero(hero: SuperHero){

    this.heroToEdit = hero;
  }

  deleteHero(hero: SuperHero){

    this.superHeroService.deleteSuperHeroes(hero)
    .subscribe((result : SuperHero[]) => this.heroes =  result);
    
    // this.heroToEdit = hero;
  }

  UpdatedHeroesList(heroes: SuperHero[]){
    this.heroes = heroes;
  }
}
