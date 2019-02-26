import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=784';
  pokemon: Pokemon[] = [];
  pokemonSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject(<Pokemon[]>[]);

  constructor(private http: HttpClient) {
    this.loadPokemon();
  }

  getPokemonId(url: string) {
    return url.substring(34, url.length - 1);
  }

  loadPokemon() {
    this.http.get(this.pokemonUrl).subscribe(data => {
      this.pokemon = data['results'];
      this.pokemon.forEach(p => {
        p.id = this.getPokemonId(p.url);
        p.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png';
      });
      this.pokemonSubject.next(this.pokemon);
    });
  }

  pokemon$(): Observable<Pokemon[]> {
    return this.pokemonSubject.asObservable();
  }

  getPokemonDetails(id: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
