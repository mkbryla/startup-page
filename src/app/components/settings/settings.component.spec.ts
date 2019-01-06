import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { faCog } from '@fortawesome/free-solid-svg-icons';

import { IfFadedDirective } from '@app/directives';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent, IfFadedDirective ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set faSettings to faCog by default', () => {
    expect(component.faSettings).toEqual(faCog);
  });

  it('should set isSettingsHovered to correct value', () => {
    component.toggleSettingsMode(true)
    expect(component.isSettingsHovered).toEqual(true);

    component.toggleSettingsMode(false)
    expect(component.isSettingsHovered).toEqual(false);
  });
});
