import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBoxComponent } from './empty-box.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmptyBoxComponent', () => {
  let component: EmptyBoxComponent;
  let fixture: ComponentFixture<EmptyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyBoxComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
