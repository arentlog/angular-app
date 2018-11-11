import { Injectable } from '@angular/core';
import { Answer } from './answer';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChuckJoke } from './chuck-joke';

export interface Joke {
  type: string;
  value: ChuckJoke;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private answerSubject$: BehaviorSubject<Answer> = new BehaviorSubject(<Answer>{});
  private jokeSubject$: BehaviorSubject<Joke> = new BehaviorSubject(<Joke>{});

  constructor(private http: HttpClient) { }

  getAnswer() {
    this.http.get<Answer>('https://yesno.wtf/api').subscribe(data => {
      this.answerSubject$.next(data);
    });
  }

  getChuckJoke() {
    this.http.get<Joke>('http://api.icndb.com/jokes/random').subscribe(data => {
      this.jokeSubject$.next(data);
    });
  }

  answer$(): Observable<Answer> {
    return this.answerSubject$.asObservable();
  }

  chuckJoke$(): Observable<Joke> {
    return this.jokeSubject$.asObservable();
  }
}
