import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  public date: Date;

  constructor() { }

  public ngOnInit(): void {
    this.setDate();
  }

  public setDate(): void {
    setInterval(()=>{
      this.date = new Date();
    },1000)
  }
}
