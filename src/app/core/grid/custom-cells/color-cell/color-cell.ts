import { Component, input } from '@angular/core';
import { BaseCustomCell } from '../base-custom-cell';

@Component({
  selector: 'ta9-color-cell',
  templateUrl: './color-cell.html',
  styleUrl: './color-cell.scss',
  standalone: true,
})
export class ColorCell<T> extends BaseCustomCell<T> {
  readonly value = input<string>();
}
