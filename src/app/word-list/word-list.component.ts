import { Component, OnInit } from '@angular/core';
import koreanVerbList from '../../assets/json/KoreanVerbList.json';
import KoreanAdjectiveList from '../../assets/json/KoreanAdjectiveList.json';

export interface Tile {
  cols: number;
  rows: number;
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  currentTiles: Tile[] = [];

  verbTiles: Tile[] = [];

  adjectiveTiles: Tile[] = [];

  constructor() { }

  setCurrentTiles(tileType:string){
    switch(tileType) {
      case 'verbs':
        this.currentTiles = this.verbTiles;
        break;
      case 'adjectives':
        this.currentTiles = this.adjectiveTiles;
        break;
      default:
        this.currentTiles = this.verbTiles;
    }

  }

  ngOnInit(): void {
    for (let i = 0; i < koreanVerbList.length; i++){
      let wordPair = {text1: koreanVerbList[i].english, text2: koreanVerbList[i].korean, cols: 1, rows: 1};
      this.verbTiles.push(wordPair);
    };

    for (let i = 0; i < KoreanAdjectiveList.length; i++){
      let wordPair = {text1: KoreanAdjectiveList[i].english, text2: KoreanAdjectiveList[i].korean, cols: 1, rows: 1};
      this.adjectiveTiles.push(wordPair);
    };

    this.setCurrentTiles('verbs');
  }

}
