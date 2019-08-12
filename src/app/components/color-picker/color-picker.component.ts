import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
/*
generic color picker component, receives the list of colors and emitts an event when the active
color changes.
 */
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input() colors = []; // receives a list of colors
  @Output() colorChange = new EventEmitter(); // triggered when the active color changes
  activeColor: string; // Current selected color

  constructor() { }

  ngOnInit() {
   this.setActiveColor(this.colors[0]);
  }

  // Sets the active color using the received color
  setActiveColor(color) {
    this.activeColor = color;
    this.colorChange.emit(this.activeColor);
  }

}
