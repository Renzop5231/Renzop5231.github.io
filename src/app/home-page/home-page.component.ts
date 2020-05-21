import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation, slideExpandAnimation } from '../_animations/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [slideExpandAnimation],
  //host: { '[@slideExpandAnimation]': '' }
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
