import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
