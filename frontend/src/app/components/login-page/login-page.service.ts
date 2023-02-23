import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPageService {
  constructor() {}
  public loginUser(email: string, password: string): Promise<any> {
    const user = { email: email, password: password };
    return fetch('http://127.0.0.1:8888/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

  public getItemsFromBackend() {
    return fetch('http://localhost:8888/events', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => res.json());
  }
}
