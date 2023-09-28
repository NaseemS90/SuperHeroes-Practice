import { Component } from '@angular/core';
import { SuperHero } from './Models/SuperHero';
import { SuperHeroService } from './MyServices/super-hero.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private superHeroService: SuperHeroService) {
    
  }
  
  title = 'AngularUI';
  sidenavDisplay = false;
  heroToEdit?: SuperHero;
  heroes: SuperHero[] = [];
  numbers: number[] = [];
  
  myDataSource = this.heroes;
  listOfColumns: string[] = ['Name', 'First Name', 'Last Name', 'Place'];

  closeSidenav() {
    debugger;
    this.sidenavDisplay = false;
  }

  openSidenav() {
    debugger;
    this.sidenavDisplay = true;
  }
  
  ngOnInit(): void {
    
  for (let i = 0; i < 1000; i++) {
    this.numbers.push(i);
    }

    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
  createHero() {
    this.heroToEdit = new SuperHero();
  }

  updateHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteSuperHeroes(hero)
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  UpdatedHeroesList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }
}
