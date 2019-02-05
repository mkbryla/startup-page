import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: [ './date.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {

  public date$: Observable<Date>;

  public ngOnInit(): void {
    this.date$ = timer(0, 1000).pipe(map(() => new Date()));
  }
}
