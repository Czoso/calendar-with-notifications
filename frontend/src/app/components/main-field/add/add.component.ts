import { AddService } from './add.service';
import { Component, OnInit } from '@angular/core';
import { Event as EventModel, EventDate } from 'src/app/shared';
import { CalendarService } from './calendar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public description? = '';
  private currentDate?: EventDate;
  constructor(
    private calendarService: CalendarService,
    private addService: AddService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.calendarService.currentDate$.subscribe((date: EventDate) => {
      this.currentDate = date;
    });
  }

  public onSubmit() {
    if (this.currentDate && this.description) {
      const eventToSend: EventModel = {
        description: this.description,
        date: this.currentDate,
      };
      console.log(eventToSend);
      this.addService.sendEventToBackend(eventToSend);
      this.addService.getEventsFromBackend().then((events) => {
        console.log(JSON.stringify(events));
        localStorage.setItem('events', JSON.stringify(events));
        this.router.navigate(['/add']);
      });
    }
  }

  public onValueChange(event: Event) {
    this.description = (event.target as any).value;
  }
}
