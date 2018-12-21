import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  answer: string = '../assets/loading_icon.gif';

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  askQuestion() {
    this.answer = '../assets/loading_icon.gif';

    this.homeService.getAnswer().subscribe(data => {
      if (data) {
        this.answer = data;
      }
    });
  }

}
