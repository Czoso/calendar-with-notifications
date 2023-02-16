import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headings: string[] = ['preview', 'add', 'options'];
  constructor() {}

  ngOnInit() {}
}
