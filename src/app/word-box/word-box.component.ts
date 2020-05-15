import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import koreanVerbList from '../../assets/json/KoreanVerbList.json';
import  Swal from 'sweetalert2';

@Component({
  selector: 'word-box',
  templateUrl: './word-box.component.html',
  styleUrls: ['./word-box.component.css'],
})
export class WordBoxComponent implements OnInit {

  showAnswer = false;
  wordListString = '';
  boxVerbList = JSON.parse(JSON.stringify(koreanVerbList));

  wordindex = 0;

  displayedWords = '';
  inputedWords = '';

  wordlist = [];

  currentWord = '';

  @ViewChild('UserInput') UserInputRef: ElementRef;

  // checkWords(){

  //   if(this.inputedWords != this.displayedWords){
  //   this.UserInputRef.nativeElement.id = 'UserInputError';
  //   }
  // }

  onEnterUp(){
    if(this.inputedWords == this.boxVerbList[this.wordindex].korean){
      console.log('match');
      Swal.fire({
        heightAuto: false,
        backdrop: true,
        icon: 'success',
        title: 'Correct!',
        text: 'Move on to the next word...',
        showConfirmButton: true,
        onClose: () => {
          if(this.wordindex < this.boxVerbList.length -1){
            this.wordindex++;
            this.displayedWords = this.boxVerbList[this.wordindex].english;
            this.currentWord = this.boxVerbList[this.wordindex].korean;
          }
          else{
            this.wordindex = 0;
            for (let i = this.boxVerbList.length - 1; i > 0; i--){
              const j = Math.floor(Math.random() * (i + 1));
              [this.boxVerbList[i], this.boxVerbList[j]] = [this.boxVerbList[j], this.boxVerbList[i]];
            }
            console.log(this.boxVerbList);
            console.log('reset');

            this.displayedWords =  this.boxVerbList[this.wordindex].english;
            this.currentWord = this.boxVerbList[this.wordindex].korean;
          }
        }
      });
    }
    else{
      Swal.fire({
        heightAuto: false,
        backdrop: true,
        icon: 'error',
        title: 'Incorrect!',
        text:'Please enter the correct word',
        showConfirmButton: true,
      });
    }
    this.inputedWords = "";
  }

  ngOnInit(): void {
    for (let i = this.boxVerbList.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [this.boxVerbList[i], this.boxVerbList[j]] = [this.boxVerbList[j], this.boxVerbList[i]];
    }
    console.log(this.boxVerbList);

    this.displayedWords = this.boxVerbList[this.wordindex].english;

    this.currentWord = this.boxVerbList[this.wordindex].korean;

    console.log(this.currentWord);
  }
}
