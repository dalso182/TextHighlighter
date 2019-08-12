import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import { TextHighlighterContainerComponent } from './containers/text-highlighter-container/text-highlighter-container.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TextHighlighterComponent } from './components/text-highlighter/text-highlighter.component';
import {FormsModule} from '@angular/forms';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TextHighlighterContainerComponent,
    TextInputComponent,
    TextHighlighterComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
