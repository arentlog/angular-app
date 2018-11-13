import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private answerSubject$: BehaviorSubject<string> = new BehaviorSubject(<string>'');
  private jokeSubject$: BehaviorSubject<string> = new BehaviorSubject(<string>'');

  constructor(private http: HttpClient) { }

  getAnswer() {
    this.http.get<any>('https://yesno.wtf/api').subscribe(data => {
      this.answerSubject$.next(data.image);
    });
  }

  getChuckJoke() {
    this.http.get<any>('http://api.icndb.com/jokes/random').subscribe(data => {
      this.jokeSubject$.next(data.value.joke);
    });
  }

  answer$(): Observable<string> {
    return this.answerSubject$.asObservable();
  }

  chuckJoke$(): Observable<string> {
    return this.jokeSubject$.asObservable();
  }
}
