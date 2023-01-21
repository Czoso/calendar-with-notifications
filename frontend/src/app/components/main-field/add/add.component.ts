import { Component, OnInit } from '@angular/core';
import { EventDate } from 'src/app/shared';
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
  public onSubmit() {
    console.log(this.currentDate);
    console.log(this.description);
    if (this.currentDate && this.description) {
      console.log('works');
    }
  }
  public onValueChange(event: Event) {
    this.description = (event.target as any).value;
  }
}
