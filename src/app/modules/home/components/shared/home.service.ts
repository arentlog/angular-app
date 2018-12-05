import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private answerSubject$: BehaviorSubject<string> = new BehaviorSubject(<string>'');

  constructor(private http: HttpClient) { }

  getAnswer() {
    this.http.get<any>('https://yesno.wtf/api').subscribe(data => {
      this.answerSubject$.next(data.image);
    });
    return this.answerSubject$.asObservable();
  }
}
