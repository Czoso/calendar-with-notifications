import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  constructor() {}
  public deleteItemsFromBackend(index: number) {
    return fetch(`http://127.0.0.1:8888/events/${index}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}
