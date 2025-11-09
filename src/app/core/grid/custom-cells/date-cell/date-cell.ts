import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ta9-date-cell',
  imports: [DatePipe],
  templateUrl: './date-cell.html',
  styleUrl: './date-cell.scss',
})
export class DateCell<T> {
  readonly value = input<string>();
}
