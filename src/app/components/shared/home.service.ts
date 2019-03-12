import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private answerSubject$: BehaviorSubject<string> = new BehaviorSubject(<string>'');

  doc: any;

  constructor(private http: HttpClient) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://r6.tracker.network/profile/pc/logiiee', false);
    xhr.send(null);
    if (xhr.status === 200) {
      this.doc = document.createElement('html');
      this.doc.innerHTML = xhr.response;
    }

    console.log(this.getStat('RankedKDRatio'));
  }

  getStat(stat: string) {
    return this.doc.querySelector('[data-stat="' + stat + '"]').textContent;
  }

  getAnswer() {
    this.http.get<any>('https://yesno.wtf/api').subscribe(data => {
      this.answerSubject$.next(data.image);
    });
    return this.answerSubject$.asObservable();
  }
}
