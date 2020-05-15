import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt-tabs',
  templateUrl: './alt-tabs.component.html',
  styleUrls: ['./alt-tabs.component.sass']
})
export class AltTabsComponent implements OnInit {
  test = "this \n is a string \n";
  constructor() { }

  ngOnInit(): void {
  }

}
