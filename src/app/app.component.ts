import { Component, OnInit } from '@angular/core';
import { AppService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  answer: string = '../assets/loading_icon.gif';
  chuckJoke: string = 'Chuck Norris.';

  constructor(private appService: AppService) { }

  askQuestion() {
    this.answer = '../assets/loading_icon.gif';

    this.appService.getAnswer();
    this.appService.answer$().subscribe(data => {
      this.answer = data;
    });
  }

  showChuckJoke() {
    this.chuckJoke = 'Loading...';

    this.appService.getChuckJoke();
    this.appService.chuckJoke$().subscribe(data => {
      this.chuckJoke = data;
    });
  }

  ngOnInit() {
  }
}
