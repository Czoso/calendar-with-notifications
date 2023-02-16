import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  constructor() {}

  public getItemsFromBackend() {
    return fetch('http://127.0.0.1:8888/events').then((res) => res.json());
  }
  public deleteItemsFromBackend(index: number) {
    return fetch(`http://127.0.0.1:8888/events/${index}`, { method: 'DELETE' });
  }
}
