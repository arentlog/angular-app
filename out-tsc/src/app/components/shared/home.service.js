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
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.answerSubject$ = new BehaviorSubject('');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://r6.tracker.network/profile/pc/logiiee', false);
        xhr.send(null);
        if (xhr.status === 200) {
            this.doc = document.createElement('html');
            this.doc.innerHTML = xhr.response;
        }
        console.log(this.getStat('RankedKDRatio'));
    }
    HomeService.prototype.getStat = function (stat) {
        return this.doc.querySelector('[data-stat="' + stat + '"]').textContent;
    };
    HomeService.prototype.getAnswer = function () {
        var _this = this;
        this.http.get('https://yesno.wtf/api').subscribe(function (data) {
            _this.answerSubject$.next(data.image);
        });
        return this.answerSubject$.asObservable();
    };
    HomeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HomeService);
    return HomeService;
}());
export { HomeService };
//# sourceMappingURL=home.service.js.map