import { Component, input } from '@angular/core';

@Component({
  selector: 'ta9-color-cell',
  imports: [],
  templateUrl: './color-cell.html',
  styleUrl: './color-cell.scss',
  standalone: true,
})
export class ColorCell<T> {
  item = input<T & { color: string }>(null as any);
}
