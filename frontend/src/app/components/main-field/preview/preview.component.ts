import { Component, OnInit } from '@angular/core';
import { Event as EventModel } from 'src/app/shared';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  private event: EventModel = {
    description: 'cokolwiek',
    date: {
      day: 1,
      month: 'january',
      year: 2012,
      time: {
        hour: 12,
        minute: 15,
      },
    },
  };
  public events: EventModel[] = [];
  constructor() {}

  ngOnInit() {
    this.events.push(this.event);
    console.log(this.events);
  }
}
