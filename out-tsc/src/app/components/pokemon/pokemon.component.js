var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
var PokemonComponent = /** @class */ (function () {
    function PokemonComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.pokemon = [];
    }
    PokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.pokemon$().subscribe(function (data) {
            if (data) {
                _this.pokemon = data;
            }
        });
    };
    PokemonComponent = __decorate([
        Component({
            selector: 'app-pokemon',
            templateUrl: './pokemon.component.html',
            styleUrls: ['./pokemon.component.css']
        }),
        __metadata("design:paramtypes", [PokemonService])
    ], PokemonComponent);
    return PokemonComponent;
}());
export { PokemonComponent };
//# sourceMappingURL=pokemon.component.js.map