import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { EventDate } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  public currentDate$ = new ReplaySubject<EventDate>(1);
  constructor() {}
  public setDate(date: EventDate): void {
    this.currentDate$.next(date);
    console.log(date);
  }
}
