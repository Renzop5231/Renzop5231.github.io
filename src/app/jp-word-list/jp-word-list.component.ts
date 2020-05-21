import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { slideExpandAnimation, slideInOutAnimation } from '../_animations/index';

@Component({
  selector: 'app-jp-word-list',
  templateUrl: './jp-word-list.component.html',
  styleUrls: ['./jp-word-list.component.css'],
  animations: [slideExpandAnimation]
})
export class JpWordListComponent implements OnInit {

  rotationY = 0;

  @ViewChild('backgroundCard') backgroundCard: ElementRef;

  constructor() { }

  tween(): void {
    let card: Element = this.backgroundCard.nativeElement;

    console.log(card);

    this.rotationY += 360;

    gsap.to(card, {duration: 5, rotationY: this.rotationY, ease:"power1.inOut", transformOrigin:"center center -150px"});
  }

  ngOnInit(): void {

  }

}
