import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: [ './date.component.scss' ]
})
export class DateComponent implements OnInit {

  public date: Date;

  public ngOnInit(): void {
    this.date = new Date();
    this.setDate();
  }

  public setDate(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
