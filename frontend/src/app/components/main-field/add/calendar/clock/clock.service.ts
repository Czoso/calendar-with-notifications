import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { EventTime } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  public currentTime$ = new ReplaySubject<EventTime>(1);

  constructor() {}
  public setTime(time: EventTime): void {
    this.currentTime$.next(time);
  }
}
