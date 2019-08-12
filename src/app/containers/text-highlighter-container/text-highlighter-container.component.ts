import {Component, Input, OnInit} from '@angular/core';
/*
This components acts as the orchestrator of the application, it takes care of the communication
between components
 */
@Component({
  selector: 'app-text-highlighter-container',
  templateUrl: './text-highlighter-container.component.html',
  styleUrls: ['./text-highlighter-container.component.scss']
})
export class TextHighlighterContainerComponent implements OnInit {
  textToHighlight: string; // text to be highlighted
  availableColors = ['red', 'yellow', 'green']; // colors that will be use for highlighting, try adding blue
  highlightColor: string; // currect selected highlight color
  wordsFilterActiveColor: string; // current selected filter color for stored words
  storedWordsByColor = []; // associative array to store highlighted words, the color will be the key of the arrays
  showFilter = false; // flag to show/hide filter box

  constructor() { }

  ngOnInit() {
    // we initialize the associative array using the color in availableColors
    this.availableColors.forEach((color) => {
      if (!this.storedWordsByColor[color]) {
        this.storedWordsByColor[color] = [];
      }
    });
  }

  // sets the text that will be available to be highlighted
  setTextToHighlight(textToHighlight: string) {
    if (textToHighlight === '') {
      this.reset(); // we reset if string was empty, meaning the user cleared the text
    }
    this.textToHighlight = textToHighlight;
  }

  // Sets the selected highlight color
  setHighlightColor(color) {
    this.highlightColor = color;
  }

  // stores the words highlighted in an associative array(storedWordsByColor) using the color as key
  storeWords(words: any, highlightColor: string) {
    if ( words !== '') {
      this.storedWordsByColor[highlightColor].push(words);
      this.showFilter = true; // we enable the filter box after adding words
    }
  }

  // sets the filtering color
  setWordsFilterColor(colorToFilter: any) {
    this.wordsFilterActiveColor = colorToFilter;
  }

  // resets the values of the filter to start using a new text
  reset() {
    this.showFilter = false;
    this.availableColors.forEach((color) => {
        this.storedWordsByColor[color] = [];
    });
  }
}
