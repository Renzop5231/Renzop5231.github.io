import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import KoreanAdjectiveList from '../../assets/json/KoreanAdjectiveList.json';
import { slideInOutAnimation, slideExpandAnimation } from '../_animations/index';
import Glide from '@glidejs/glide';
import { gsap } from 'gsap';
import {MediaMatcher} from '@angular/cdk/layout';

export interface Card {
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css'],
  //animations: [slideExpandAnimation],
  //host: {'[@slideExpandAnimation]': ''}
})
export class FlashCardsComponent implements OnInit, OnDestroy {

  @ViewChild('thisDiv') thisDiv: ElementRef;
  @ViewChild('startBut') startBut: ElementRef;


  adjectiveCards: Card[] = [];

  start = true;

  glide = new Glide('.glide', {
    type: 'carousel',
    gap: 10,
    perView: 1,
    animationDuration: 1500,
    focusAt: 'center'
  })

  index = this.glide.index;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  testFunc(){
    console.log('test');
  }

  ngOnInit(): void {
    for (let i = 0; i < KoreanAdjectiveList.length; i++){
      let wordPair = {text1: KoreanAdjectiveList[i].english, text2: KoreanAdjectiveList[i].korean};
      this.adjectiveCards.push(wordPair);
    };
  }

  slideRight(){
    this.glide.go('>');
  }

  slideLeft(){
    this.glide.go('<');
  }

  startCards(){
    this.thisDiv.nativeElement.hidden = this.thisDiv.nativeElement.hidden ? false : true;
    this.start = this.start ? false : true;

    this.glide.on('mount.after', function(){
      gsap.from('.flash-cards', {duration: 0.75, scale: 0, transformOrigin: "50% bottom"});
    });

    // this.glide.on('move.after', function(){
    //   gsap.to('.flash-cards', {duration: 2, rotationY: 360, ease:"power1.inOut", transformOrigin:"center center -150px"});
    // });

    this.glide.mount();

    // this.glide.on('mount.before', function() {
    //   this.start = true;
    // })

  }

}
