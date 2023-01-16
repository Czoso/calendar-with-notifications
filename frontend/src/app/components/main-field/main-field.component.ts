import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-field',
  templateUrl: './main-field.component.html',
  styleUrls: ['./main-field.component.scss'],
})
export class MainFieldComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
}
