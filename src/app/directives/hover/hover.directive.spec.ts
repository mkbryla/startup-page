import { HoverDirective } from './hover.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div id="testComponent" (hover)="onHover($event)"></div>`
})
class TestComponent {
  public isHovered: boolean;

  public onHover(isHovered: boolean): void {
    this.isHovered = isHovered;
  }

  constructor(public elementRef: ElementRef) {
  }
}

describe('HoverDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverDirective, TestComponent ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('#testComponent'));
  });

  it('should add class "hovered" when mouseenter on element', () => {
    debugElement.triggerEventHandler('mouseenter', null);
    expect(component.isHovered).toEqual(true);
    expect(debugElement.nativeElement.classList.contains('hovered')).toBe(true);
  });

  it('should remove class "hovered" when mouseleave on element', () => {
    debugElement.triggerEventHandler('mouseenter', null);
    expect(debugElement.nativeElement.classList.contains('hovered')).toBe(true);

    debugElement.triggerEventHandler('mouseleave', null);
    expect(component.isHovered).toEqual(false);
    expect(debugElement.nativeElement.classList.contains('hovered')).toBe(false);
  });
});
