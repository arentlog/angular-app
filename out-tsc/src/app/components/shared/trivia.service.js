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
var TriviaService = /** @class */ (function () {
    function TriviaService(http) {
        this.http = http;
        this.triviaSubject$ = new BehaviorSubject({});
    }
    TriviaService.prototype.getRandomTrivia = function () {
        var _this = this;
        this.http.get('http://jservice.io/api/random').subscribe(function (data) {
            _this.triviaSubject$.next(data[0]);
        });
        return this.triviaSubject$.asObservable();
    };
    TriviaService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], TriviaService);
    return TriviaService;
}());
export { TriviaService };
//# sourceMappingURL=trivia.service.js.map