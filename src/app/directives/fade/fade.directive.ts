import { Component, HostBinding } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  /* tslint:disable-next-line */
  selector: '[fade]',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('300ms', style({ opacity: '1' }))
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('300ms', style({ opacity: '0' }))
      ])
    ])
  ],
  template: `
    <ng-content @fade></ng-content>
  `
})

/* tslint:disable-next-line */
export class FadeDirective {
  @HostBinding('@fade') public trigger: boolean = true;
}
