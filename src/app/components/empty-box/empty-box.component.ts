import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WIDGET_TYPE } from '../box/box.component';

@Component({
  selector: 'app-empty-box',
  templateUrl: './empty-box.component.html',
  styleUrls: [ './empty-box.component.scss' ]
})
export class EmptyBoxComponent {
  @Output() public widgetSelected: EventEmitter<WIDGET_TYPE> = new EventEmitter();

  public faPlus: IconDefinition = faPlus;
  public listOfWidgetsOpened: boolean;
  public availableWidgets: any[] = Object.keys(WIDGET_TYPE);

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    if (this.listOfWidgetsOpened) {
      this.closeListOfWidgets();
    }
  }

  public openListOfWidgets(): void {
    this.listOfWidgetsOpened = true;
  }

  public closeListOfWidgets(): void {
    this.listOfWidgetsOpened = false;
  }

  public setWidget(widget: WIDGET_TYPE): void {
    this.widgetSelected.emit(widget);
  }
}
