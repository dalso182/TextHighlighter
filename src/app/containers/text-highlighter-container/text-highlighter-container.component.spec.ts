import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHighlighterContainerComponent } from './text-highlighter-container.component';
import {TextInputComponent} from '../../components/text-input/text-input.component';
import {TextHighlighterComponent} from '../../components/text-highlighter/text-highlighter.component';
import {ColorPickerComponent} from '../../components/color-picker/color-picker.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TextHighlighterContainerComponent', () => {
  let component: TextHighlighterContainerComponent;
  let fixture: ComponentFixture<TextHighlighterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHighlighterContainerComponent, TextInputComponent,
        TextHighlighterComponent, ColorPickerComponent ],
      imports: [BrowserAnimationsModule, FormsModule, MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHighlighterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be able to set text to be highlighted', () => {
    expect(component.textToHighlight).toBeFalsy();
    component.setTextToHighlight('some text');
    expect(component.textToHighlight).toBeTruthy();
  });
  it('should be able to set a highlight color', () => {
    expect(component.highlightColor).toBeFalsy();
    component.setHighlightColor('red');
    expect(component.highlightColor).toBeTruthy();
  });
  it('should be able to set a filter color', () => {
    expect(component.wordsFilterActiveColor).toBeFalsy();
    component.setWordsFilterColor('red');
    expect(component.wordsFilterActiveColor).toBeTruthy();
  });
  it('should have initial list of colors', () => {
    expect(component.availableColors).toBeTruthy();
    expect(component.availableColors.length).toBeGreaterThan(0);
  });
  it('should show filter box when words are highlighted', () => {
    component.availableColors = ['red'];
    expect(component.showFilter).toBeFalsy();
    component.storeWords('some words', 'red')
    expect(component.showFilter).toBeTruthy();
  });
  it('should reset store words if highlight text is empty should', () => {
    component.availableColors = ['red'];
    expect(component.showFilter).toBeFalsy();
    component.storeWords('some words', 'red');
    expect(component.showFilter).toBeTruthy();
    component.setTextToHighlight('');
    expect(component.showFilter).toBeFalsy();
  });
});
