import { Component, OnInit } from '@angular/core';
import koreanVerbList from '../../assets/json/KoreanVerbList.json';

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

  tiles: Tile[] = [
  ];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < koreanVerbList.length; i++){
      let wordPair = {text1: koreanVerbList[i].english, text2: koreanVerbList[i].korean, cols: 1, rows: 1};
      this.tiles.push(wordPair);
    };
    console.log(koreanVerbList);
  }

}
