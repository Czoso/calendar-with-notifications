import { Component, OnInit } from '@angular/core';
import { EventDate, EventTime } from 'src/app/shared';
import { CalendarService } from './calendar.service';
import { ClockService } from './clock';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public days: number[] = new Array(42).fill(0);
  public weekDays: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  public months: string[] = [
    'Jun',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  public year: number = 2013;
  private animationInProgress: boolean = false;
  private monthName: string = '';
  private eventTime?: EventTime;
  constructor(
    private clockService: ClockService,
    private calendarService: CalendarService
  ) {}
  public ngOnInit(): void {
    this.clockService.currentTime$.subscribe((time: EventTime) => {
      this.eventTime = time;
      this.sendDate();
    });
  }
  private sendDate() {
    let dayValue = -1;
    function isMonthActive(): boolean {
      let isActive = false;
      const monthsButtons = document.querySelectorAll(
        '.months__months-list__month'
      );
      monthsButtons.forEach((month) => {
        if (month.classList.contains('month-active')) {
          isActive = true;
        }
      });
      return isActive;
    }
    function isDayActive(): boolean {
      let isActive = false;
      const days = document.querySelectorAll('.days__day');
      days.forEach((day) => {
        if (day.classList.contains('day-active')) {
          isActive = true;
          dayValue = Number(day.textContent);
        }
      });
      return isActive;
    }
    if (isDayActive() && isMonthActive() && this.eventTime) {
      const currentDate: EventDate = {
        day: dayValue,
        month: this.monthName,
        year: this.year,
        time: this.eventTime,
      };
      this.calendarService.setDate(currentDate);
    }
  }
  public changeYear(direction: string): void {
    if (this.animationInProgress == false) {
      this.animationInProgress = true;
      const animationTime = 300;
      const currentYear = document.querySelector(
        '.year__this-year__year-wrapper__displayed-year'
      );
      if (currentYear) {
        const yearDiv = currentYear.cloneNode(true);
        const yearContainer = document.querySelector(
          '.year__this-year__year-wrapper'
        );
        if (direction === 'next') {
          const changingNextYear = [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-100%)' },
          ];
          const nextYear = this.year + 1;
          yearDiv.textContent = nextYear.toString();
          setTimeout(() => {
            currentYear.remove();
            this.animationInProgress = false;
          }, animationTime);
          yearContainer?.appendChild(yearDiv);
          yearContainer?.animate(changingNextYear, animationTime);
          this.year += 1;
        }
        if (direction === 'previous') {
          const changingPreviousYear = [
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' },
          ];
          const previousYear = this.year - 1;
          yearDiv.textContent = previousYear.toString();
          setTimeout(() => {
            currentYear.remove();
            this.animationInProgress = false;
          }, animationTime);
          yearContainer?.insertBefore(yearDiv, yearContainer?.firstChild);
          yearContainer?.animate(changingPreviousYear, animationTime);
          this.year -= 1;
        }
        this.generateDays();
      }
    }
  }
  public monthsClicked(monthClicked: number): void {
    const monthsButtons = document.querySelectorAll(
      '.months__months-list__month'
    );
    monthsButtons.forEach((month) => {
      month.classList.remove('month-active');
    });
    monthsButtons[monthClicked].classList.add('month-active');
    this.generateDays();
  }
  public generateDays(): void {
    this.days.fill(0);
    let days: number[] = new Array(42).fill(0);
    let enteredMonth = -1;
    const monthsButtons = document.querySelectorAll(
      '.months__months-list__month'
    );
    monthsButtons.forEach((month, index) => {
      if (month.classList.contains('month-active')) {
        enteredMonth = index;
      }
    });
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    if (enteredMonth > -1) {
      this.monthName = monthNames[enteredMonth];
      const enteredDate = new Date(
        `${monthNames[enteredMonth]} 1, ${this.year} 23:15:15`
      );
      const weekday = enteredDate.getDay();
      const monthDays = new Date(this.year, enteredMonth + 1, 0).getDate();
      function fillDays(weekday: number): void {
        for (let i = 0; i < monthDays; i++) {
          days[weekday + i - 1] = i + 1;
        }
      }
      if (weekday == 0) {
        fillDays(weekday + 7);
      } else {
        fillDays(weekday);
      }
      this.days = days;
      this.sendDate();
    }
  }
  public dayClicked(dayClicked: HTMLElement): void {
    if (Number(dayClicked.textContent) != 0) {
      const days = document.querySelectorAll('.days__day');
      days.forEach((day) => {
        day.classList.remove('day-active');
      });
      dayClicked.classList.add('day-active');
      this.sendDate();
    }
  }
}
