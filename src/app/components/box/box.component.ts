import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export enum BOX_SIZE {
  DEFAULT = 'DEFAULT',
  SMALL = 'SMALL'
}

export enum WIDGET_TYPE {
  DATE = 'DATE',
  WEATHER = 'WEATHER',
  TODO = 'TODO',
  FAVLINKS = 'FAVLINKS',
}

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: [ './box.component.scss' ]
})
export class BoxComponent implements OnInit {
  @HostBinding('attr.class') public hostClass: string;

  @Input() public size: BOX_SIZE = BOX_SIZE.DEFAULT;
  @Input() public widget: WIDGET_TYPE;
  @Input() public isSettingsMode: boolean;

  public widgetType: typeof WIDGET_TYPE = WIDGET_TYPE;
  public faClose: IconDefinition = faTimes;

  public ngOnInit(): void {
    this.hostClass = `box--${this.size.toLowerCase()}`;
  }

  public onWidgetSelected(widget: WIDGET_TYPE | null): void {
    this.widget = widget;
  }

}
