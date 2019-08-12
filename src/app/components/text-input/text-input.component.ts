import {Component, EventEmitter, OnInit, Output} from '@angular/core';
/*
This component is used to request the text to the user using a text area
 */
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  // contains the entered text
  textInput = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged';
  @Output() textSet = new EventEmitter(); // this event is emitted when the text has been set

  constructor() { }

  ngOnInit() {
  }

  // sets the input text
  setText(text: string) {
    this.textInput = text;
    this.textSet.emit(text);
  }

}
