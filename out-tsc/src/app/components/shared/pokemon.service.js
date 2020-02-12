var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=784';
        this.pokemon = [];
        this.pokemonSubject = new BehaviorSubject([]);
        this.loadPokemon();
    }
    PokemonService.prototype.getPokemonId = function (url) {
        return url.substring(34, url.length - 1);
    };
    PokemonService.prototype.loadPokemon = function () {
        var _this = this;
        this.http.get(this.pokemonUrl).subscribe(function (data) {
            _this.pokemon = data['results'];
            _this.pokemon.forEach(function (p) {
                p.id = _this.getPokemonId(p.url);
                p.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.id + '.png';
            });
            _this.pokemonSubject.next(_this.pokemon);
        });
    };
    PokemonService.prototype.pokemon$ = function () {
        return this.pokemonSubject.asObservable();
    };
    PokemonService.prototype.getPokemonDetails = function (id) {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id);
    };
    PokemonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PokemonService);
    return PokemonService;
}());
export { PokemonService };
//# sourceMappingURL=pokemon.service.js.map