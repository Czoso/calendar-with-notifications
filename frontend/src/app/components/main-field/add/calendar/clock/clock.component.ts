import { EventTime } from 'src/app/shared';
import { ClockService } from './clock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  public hour = new Date().getHours();
  public minute = new Date().getMinutes();
  private animationInProgress = false;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    setTimeout(() => {
      this.setValue();
    }, 200);
  }
  private setValue() {
    const hour = Number(
      document.querySelector('.hours__hour-wrapper__hour-displayer__hour')
        ?.textContent
    );
    const minute = Number(
      document.querySelector(
        '.minutes__minute-wrapper__minute-displayer__minute'
      )?.textContent
    );
    const eventTime: EventTime = { hour, minute };
    this.clockService.setTime(eventTime);
  }
  public changeValue(direction: string, type: string): void {
    if (this.animationInProgress == false) {
      const maxHour = 23;
      const maxMinute = 59;
      this.animationInProgress = true;
      const animationTime = 300;
      let value = document.querySelector('.wrapper');
      if (type === 'hour') {
        value = document.querySelector(
          '.hours__hour-wrapper__hour-displayer__hour'
        );
      } else {
        value = document.querySelector(
          '.minutes__minute-wrapper__minute-displayer__minute'
        );
      }
      const additionalDiv = value!.cloneNode(true);
      const divContainer = value!.parentElement;
      if (direction === 'next') {
        const changingNextYear = [
          { transform: 'translateY(50%)' },
          { transform: 'translateY(-50%)' },
        ];
        let nextValue = Number(value?.textContent) + 1;
        if (type === 'hour') {
          if (nextValue == maxHour + 1) {
            nextValue -= maxHour + 1;
          }
        } else {
          if (nextValue == maxMinute + 1) {
            nextValue -= maxMinute + 1;
          }
        }
        additionalDiv.textContent = nextValue.toString();
        setTimeout(() => {
          value?.remove();
          this.setValue();
          this.animationInProgress = false;
        }, animationTime);
        divContainer?.appendChild(additionalDiv);
        divContainer?.animate(changingNextYear, animationTime);
      }
      if (direction === 'previous') {
        const changingPreviousYear = [
          { transform: 'translateY(-50%)' },
          { transform: 'translateY(50%)' },
        ];
        let previousValue = Number(value!.textContent) - 1;
        if (type === 'hour') {
          if (previousValue == -1) {
            previousValue = maxHour;
          }
        } else {
          if (previousValue == -1) {
            previousValue = maxMinute;
          }
        }
        additionalDiv.textContent = previousValue.toString();
        setTimeout(() => {
          value!.remove();
          this.setValue();
          this.animationInProgress = false;
        }, animationTime);
        divContainer?.insertBefore(additionalDiv, divContainer?.firstChild);
        divContainer?.animate(changingPreviousYear, animationTime);
      }
    }
  }
}
