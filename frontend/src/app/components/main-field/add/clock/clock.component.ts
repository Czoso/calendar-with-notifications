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
  constructor() {}

  ngOnInit() {}
  public changeValue(direction: string, type: string): void {
    if (this.animationInProgress == false) {
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
        const nextValue = Number(value?.textContent) + 1;
        additionalDiv.textContent = nextValue.toString();
        setTimeout(() => {
          value?.remove();
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
        const previousValue = Number(value!.textContent) - 1;
        additionalDiv.textContent = previousValue.toString();
        setTimeout(() => {
          value!.remove();
          this.animationInProgress = false;
        }, animationTime);
        divContainer?.insertBefore(additionalDiv, divContainer?.firstChild);
        divContainer?.animate(changingPreviousYear, animationTime);
      }
    }
  }
}
