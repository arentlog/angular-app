import { Component, OnInit } from '@angular/core';
import { AppService } from './shared/app.service';
import { Router, Event, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
