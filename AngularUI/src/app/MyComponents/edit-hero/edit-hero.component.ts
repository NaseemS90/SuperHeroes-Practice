import { ResourceLoader } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from 'src/app/Models/SuperHero';
import { SuperHeroService } from 'src/app/MyServices/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent {

  constructor(private superHeroService: SuperHeroService) {}

  @Input() editHero?: SuperHero;
  @Output() HeroesUpdated = new EventEmitter<SuperHero[]>(); 

  updateHero(editHero: SuperHero) {
    this.superHeroService.updateSuperHeroes(editHero)
    .subscribe((result: SuperHero[]) => this.HeroesUpdated.emit(result));
    
  }

  deleteHero(editHero: SuperHero) {
    this.superHeroService.deleteSuperHeroes(editHero)
    .subscribe((result: SuperHero[]) => this.HeroesUpdated.emit(result));
  }

  addHero(editHero: SuperHero) {

    this.superHeroService.addNewSuperHeroes(editHero)
    .subscribe((result : SuperHero[] ) => this.HeroesUpdated.emit(result));

    
    

  }
}
