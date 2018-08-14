import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

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
