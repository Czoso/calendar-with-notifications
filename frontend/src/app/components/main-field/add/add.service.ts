import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Event } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  public event$ = new ReplaySubject<Event>(1);
  constructor() {}
  public setDate(event: Event): void {
    this.event$.next(event);
    console.log(event);
  }
}
