import { Component, input } from '@angular/core';

@Component({
  selector: 'ta9-color-name-tile',
  imports: [],
  templateUrl: './color-name-tile.html',
  styleUrl: './color-name-tile.scss',
})
export class ColorNameTile {
  readonly color = input<string>('');
  readonly name  = input<string>('');
}
