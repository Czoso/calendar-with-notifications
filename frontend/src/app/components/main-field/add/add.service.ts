import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Event as EventModel } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  public event$ = new ReplaySubject<EventModel>(1);
  constructor() {}
  public setDate(event: EventModel): void {
    this.event$.next(event);
  }
  public sendEventToBackend(event: EventModel): void {
    fetch('http://127.0.0.1:8888/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
  public getEventsFromBackend(): Promise<any> {
    return fetch('http://127.0.0.1:8888/events', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => res.json());
  }
}
