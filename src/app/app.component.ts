import { Component, OnInit } from '@angular/core';
import { Answer } from './shared/answer';
import { AppService } from './shared/app.service';
import { ChuckJoke } from './shared/chuck-joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  answer: Answer = {
    answer: "yes",
    forced: false,
    image: "https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif"
  };
  
  chuckJoke: ChuckJoke = {
    id: 1,
    joke: "Chuck Norris .",
    categories: []
  };

  constructor(private appService: AppService) { }

  askQuestion() {
    this.answer.image = '../assets/loading_icon.gif';

    this.appService.getAnswer();
    this.appService.answer$().subscribe(data => {
      this.answer = data;
    });
  }

  showChuckJoke() {
    this.chuckJoke.joke = 'Loading...';

    this.appService.getChuckJoke();
    this.appService.chuckJoke$().subscribe(data => {
      this.chuckJoke = data.value;
    });
  }

  ngOnInit() {
  }
}
