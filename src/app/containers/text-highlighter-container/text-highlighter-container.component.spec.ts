import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHighlighterContainerComponent } from './text-highlighter-container.component';

describe('TextHighlighterContainerComponent', () => {
  let component: TextHighlighterContainerComponent;
  let fixture: ComponentFixture<TextHighlighterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHighlighterContainerComponent ]
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
});
