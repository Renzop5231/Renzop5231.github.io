import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  colNum = 3;

  currentTiles: Tile[] = [];

  verbTiles: Tile[] = [];

  adjectiveTiles: Tile[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    isNotHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !(result.matches)),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

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

    if(this.isHandset$){
      this.colNum = 1;
    }
  }

}
