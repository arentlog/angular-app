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
import { TriviaService } from '../shared/trivia.service';
var TriviaComponent = /** @class */ (function () {
    function TriviaComponent(triviaService) {
        this.triviaService = triviaService;
        this.question = '';
        this.answer = '';
    }
    TriviaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.triviaService.getRandomTrivia().subscribe(function (data) {
            _this.question = data.question;
            _this.answer = data.answer;
        });
    };
    TriviaComponent = __decorate([
        Component({
            selector: 'app-trivia',
            templateUrl: './trivia.component.html',
            styleUrls: ['./trivia.component.css']
        }),
        __metadata("design:paramtypes", [TriviaService])
    ], TriviaComponent);
    return TriviaComponent;
}());
export { TriviaComponent };
//# sourceMappingURL=trivia.component.js.map