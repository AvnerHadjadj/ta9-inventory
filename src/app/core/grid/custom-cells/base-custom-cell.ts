import { Component, input } from '@angular/core';

@Component({
//   selector: 'ta9-base-custom-cell',
  imports: [],
  template: ``,
  standalone: true,
})
export class BaseCustomCell<T> {
  readonly field = input<string>();
  readonly item  = input<T>();
}
