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
var TypeService = /** @class */ (function () {
    function TypeService() {
        this.types = [];
        this.empty = {
            typeName: 'empty',
            typeColor: 'black',
            strengths: [],
            weaknesses: []
        };
        this.types = [
            {
                typeName: 'electric',
                typeColor: 'yellow',
                strengths: ['flying', 'water'],
                weaknesses: []
            },
            {
                typeName: 'fight',
                typeColor: 'darkred',
                strengths: ['normal', 'rock', 'ice', 'dark'],
                weaknesses: []
            },
            {
                typeName: 'water',
                typeColor: 'blue',
                strengths: ['fire', 'rock', 'ground'],
                weaknesses: []
            },
            {
                typeName: 'flying',
                typeColor: 'lightblue',
                strengths: ['fight', 'bug', 'grass'],
                weaknesses: []
            },
            {
                typeName: 'rock',
                typeColor: 'brown',
                strengths: ['flying', 'bug', 'fire', 'ice'],
                weaknesses: []
            }
        ];
    }
    TypeService.prototype.getTypeByName = function (name) {
        this.types.forEach(function (type) {
            // console.log(type.typeName, "VS", name);
            if (type.typeName === name) {
                console.log("WERE EQUAL UP IN HERE", type.typeName, name, "TYPE:", type);
                return type;
            }
        });
        console.log("EMPTY");
        return this.empty;
    };
    TypeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TypeService);
    return TypeService;
}());
export { TypeService };
//# sourceMappingURL=type.service.js.map