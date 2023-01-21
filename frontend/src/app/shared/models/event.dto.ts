export interface EventTime {
  hour: number;
  minute: number;
}
export interface EventDate {
  day: number;
  month: string;
  year: number;
  time?: EventTime;
}
export interface Event {
  date?: EventDate;
  description: string;
}
