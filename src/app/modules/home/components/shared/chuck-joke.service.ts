import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckJokeService {

  private jokeSubject$: BehaviorSubject<string> = new BehaviorSubject(<string>'');

  constructor(private http: HttpClient) { }

  getChuckJoke() {
    this.http.get<any>('http://api.icndb.com/jokes/random').subscribe(data => {
      this.jokeSubject$.next(data.value.joke);
    });
    return this.jokeSubject$.asObservable();
  }
}
