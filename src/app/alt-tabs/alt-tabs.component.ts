import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alt-tabs',
  templateUrl: './alt-tabs.component.html',
  styleUrls: ['./alt-tabs.component.css']
})
export class AltTabsComponent implements OnInit {
  @Input() language = '';

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Flash Cards',
            link: './flash-cards',
            index: 0
        }, {
            label: 'Word Lists',
            link: './word-lists',
            index: 1
        }, {
            label: 'Vocab Test',
            link: './word-box',
            index: 2
        },
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
