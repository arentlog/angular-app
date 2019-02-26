import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.pokemon$().subscribe(data => {
      if (data) {
        this.pokemon = data;
        console.log(this.pokemon);
      }
    });
  }
}
