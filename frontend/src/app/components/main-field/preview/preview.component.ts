import { PreviewService } from './preview.service';
import { Component, OnInit } from '@angular/core';
import { Event as EventModel } from 'src/app/shared';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  public events: EventModel[] = [];
  constructor(private previewService: PreviewService) {}

  ngOnInit() {
    this.previewService.getItemsFromBackend().then(({ eventList }) => {
      console.log(eventList);
      eventList.forEach((eventItem: EventModel) => {
        this.events.push(eventItem);
      });
    });
    console.log(this.previewService.getItemsFromBackend());
    console.log(this.events);
  }
  public deleteItems(index: number): void {
    this.previewService.deleteItemsFromBackend(index);
    this.events.splice(index, 1);
  }
}
