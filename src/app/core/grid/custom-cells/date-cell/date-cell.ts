import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { BaseCustomCell } from '../base-custom-cell';

@Component({
  selector: 'ta9-date-cell',
  imports: [DatePipe],
  templateUrl: './date-cell.html',
  standalone: true,
})
export class DateCell<T> extends BaseCustomCell<T> {
  readonly value = input<string>();
}
