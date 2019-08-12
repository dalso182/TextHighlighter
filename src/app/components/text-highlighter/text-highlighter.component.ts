import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
/*
This component takes care of receiving a text, displays it and allows the user to select any words
of the text and highlights them using the color received as an input
 */
@Component({
  selector: 'app-text-highlighter',
  templateUrl: './text-highlighter.component.html',
  styleUrls: ['./text-highlighter.component.scss']
})
export class TextHighlighterComponent implements OnInit {
  @Input() text; // text to be displayed
  @Input() color; // color to hightligth
  @Output() highlighted = new EventEmitter(); // event emitted when a text is highlighted

  constructor() {}

  ngOnInit() { }

  // gets the selection from the window object, creates a new node containing the selected text
  // adding a background color using the value in the color variable.
  highlightText() {
    const selection = window.getSelection(); // gets the selection
    const replacementElement = document.createElement('span'); // creates span element
    replacementElement.style.backgroundColor = this.color; // sets the BG color to the new element
    replacementElement.innerHTML = selection.toString(); // sets the content of the element
    if (selection.rangeCount) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(replacementElement); // replacement happens
      this.highlighted.emit(selection.toString()); // event emitted to communicate a highlight happened
    }
  }


}
