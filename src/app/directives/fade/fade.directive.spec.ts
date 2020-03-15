import { IfFadedDirective } from './fade.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div id="testComponent" *appIfFaded="isVisible"></div>
  `
})
class TestComponent {
  public isVisible: boolean;

  constructor(public elementRef: ElementRef) {
  }
}

describe('IfFadedDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ IfFadedDirective, TestComponent ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.isVisible = true;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('#testComponent'));
  });

  it('should add class "fade-in" on element', () => {
    component.isVisible = true;
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList.contains('fade-in')).toBe(true);
  });

  it('should add class "fade-out" on element', () => {
    component.isVisible = false
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList.contains('fade-out')).toBe(true);
  });

  it('should delete element after 300ms', () => {
    component.isVisible = false;
    fixture.detectChanges();
    setTimeout(() => {
      expect(debugElement.nativeElement).toBe(undefined);
    }, 300);
  });
});
