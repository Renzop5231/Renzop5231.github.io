import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Glide from '@glidejs/glide';
import Slider from '@glidejs/glide';
import KoreanAdjectiveList from '../../assets/json/KoreanAdjectiveList.json';
import { gsap } from 'gsap';
import { ɵTestingCompilerFactory } from '@angular/core/testing';

export interface Card {
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent implements OnInit {

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

  constructor() { }

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
