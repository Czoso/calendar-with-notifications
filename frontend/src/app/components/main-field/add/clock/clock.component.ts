import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  public hour = new Date().getHours();
  public minute = new Date().getMinutes();
  constructor() {}

  ngOnInit() {}
}
