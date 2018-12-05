import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private triviaSubject$: BehaviorSubject<any> = new BehaviorSubject(<any>{});

  constructor(private http: HttpClient) { }

  getRandomTrivia() {
    this.http.get<any>('http://jservice.io/api/random').subscribe(data => {
      this.triviaSubject$.next(data[0]);
    });
    return this.triviaSubject$.asObservable();
  }
}
