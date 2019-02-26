import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetails: any;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      if (params['pokemon']) {
        this.pokemonService.getPokemonDetails(params['pokemon']).subscribe(data => {
          this.pokemonDetails = data;
          console.log(this.pokemonDetails);
        });
      }
    });
  }

  ngOnInit() {
  }

  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
