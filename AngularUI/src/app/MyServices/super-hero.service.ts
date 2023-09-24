import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuperHero } from '../Models/SuperHero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  url = "api/SuperHeroes";

  constructor(private http: HttpClient) { }

  public getSuperHeroes(): Observable<SuperHero[]>
  {
    
     return this.http.get<SuperHero[]>(`https://localhost:7153/${this.url}`);

  }

  

  public addNewSuperHeroes(hero: SuperHero): Observable<SuperHero[]>
  {
    
     return this.http.post<SuperHero[]>(`https://localhost:7153/${this.url}`, hero);

  }

  public deleteSuperHeroes(hero: SuperHero): Observable<SuperHero[]>
  {
    
     return this.http.delete<SuperHero[]>(`https://localhost:7153/${this.url}/${hero.id}`);

  }

  public updateSuperHeroes(hero: SuperHero): Observable<SuperHero[]>
  {
    
     return this.http.put<SuperHero[]>(`https://localhost:7153/${this.url}`, hero);

  }


}
