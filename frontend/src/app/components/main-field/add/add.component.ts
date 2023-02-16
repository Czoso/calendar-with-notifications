import { Component, OnInit } from '@angular/core';
import { Event as EventModel, EventDate } from 'src/app/shared';
import { CalendarService } from './calendar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public description? = '';
  private currentDate?: EventDate;
  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.currentDate$.subscribe((date: EventDate) => {
      this.currentDate = date;
    });
  }

  private sendEventToBackend(event: EventModel): void {
    fetch('http://127.0.0.1:8888/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  public onSubmit() {
    console.log(this.currentDate);
    console.log(this.description);
    if (this.currentDate && this.description) {
      const eventToSend: EventModel = {
        description: this.description,
        date: this.currentDate,
      };
      this.sendEventToBackend(eventToSend);
    }
  }

  public onValueChange(event: Event) {
    this.description = (event.target as any).value;
  }
}
