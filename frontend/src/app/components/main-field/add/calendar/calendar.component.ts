import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
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
            this.year += 1;
            currentYear.remove();
            this.animationInProgress = false;
          }, animationTime);
          yearContainer?.appendChild(yearDiv);
          yearContainer?.animate(changingNextYear, animationTime);
        }
        if (direction === 'previous') {
          const changingPreviousYear = [
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' },
          ];
          const previousYear = this.year - 1;
          yearDiv.textContent = previousYear.toString();
          setTimeout(() => {
            this.year -= 1;
            currentYear.remove();
            this.animationInProgress = false;
          }, animationTime);
          yearContainer?.insertBefore(yearDiv, yearContainer?.firstChild);
          yearContainer?.animate(changingPreviousYear, animationTime);
        }
      }
    }
  }
  public monthsClicked(monthClicked: number): void {
    const monthsButtons = document.querySelectorAll(
      '.months__months-list__month'
    );
    monthsButtons.forEach((month) => {
      month.classList.remove('month__active');
    });
    monthsButtons[monthClicked].classList.add('month__active');
  }
}
