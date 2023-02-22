import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AddComponent,
  AppComponent,
  CalendarComponent,
  ClockComponent,
  DeleteComponent,
  HeaderComponent,
  MainFieldComponent,
  OptionsComponent,
  PreviewComponent,
  LoginPageComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreviewComponent,
    AddComponent,
    DeleteComponent,
    OptionsComponent,
    MainFieldComponent,
    CalendarComponent,
    ClockComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
