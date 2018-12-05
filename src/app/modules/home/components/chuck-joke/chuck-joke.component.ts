import { Component, OnInit } from '@angular/core';
import { ChuckJokeService } from '../shared/chuck-joke.service';

@Component({
  selector: 'app-chuck-joke',
  templateUrl: './chuck-joke.component.html',
  styleUrls: ['./chuck-joke.component.css']
})
export class ChuckJokeComponent implements OnInit {

  chuckJoke: string = '';

  constructor(private chuckJokeService: ChuckJokeService) { }

  ngOnInit() {
    this.chuckJokeService.getChuckJoke().subscribe(data => {
      this.chuckJoke = data;
    });
  }

  showChuckJoke() {
    this.chuckJokeService.getChuckJoke().subscribe(data => {
      this.chuckJoke = data;
    });
  }

}
