import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public modelForm!: UntypedFormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginPageService: LoginPageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }
  onSubmit() {
    const formValue = this.modelForm.value;
    this.loginPageService
      .loginUser(formValue.email, formValue.password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('refreshToken'));
        this.loginPageService
          .getItemsFromBackend()
          .then((events) => {
            localStorage.setItem('events', JSON.stringify(events));
            this.router.navigate(['/preview']);
          })
          .catch(() => {
            console.log('No events yet');
            localStorage.setItem('events', '');
            this.router.navigate(['/preview']);
          });
      })
      .catch(() => {
        console.log('unauthorized');
      });
  }
  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
