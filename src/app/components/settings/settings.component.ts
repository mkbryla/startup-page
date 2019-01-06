import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  public faSettings: IconDefinition = faCog;
  public isSettingsHovered: boolean;

  public toggleSettingsMode(hovered: boolean): void {
    this.isSettingsHovered = hovered;
  }
}
