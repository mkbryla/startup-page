import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
  });

  it('should set date and call setDate onInit', () => {
    expect(component.date).toEqual(undefined);
    const spy = spyOn(component, 'setDate');
    component.ngOnInit();
    expect(component.date).not.toEqual(undefined);
    expect(spy).toHaveBeenCalled();
  });
});
