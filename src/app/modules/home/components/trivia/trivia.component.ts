import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../shared/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  question: string = '';
  answer: string = '';

  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
    this.triviaService.getRandomTrivia().subscribe(data => {
      this.question = data.question;
      this.answer = data.answer;
    });
  }

}
