import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  public faSettings: IconDefinition = faCog;
  public isSettingsHovered: boolean;
  public showSettings$: Observable<boolean>;
  private showSettingsSubject: Subject<boolean> = new Subject<boolean>();

  public ngOnInit(): void {
    this.showSettings$ = this.showSettingsSubject.pipe(debounceTime(50));
  }
  public toggleSettingsMode(hovered: boolean): void {
    this.showSettingsSubject.next(hovered);
  }
}
