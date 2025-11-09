import { Component, input, output } from '@angular/core';
import Icon from '../icon/icon';

@Component({
  selector: 'ta9-grid-search-filter',
  imports: [Icon],
  templateUrl: './grid-search-filter.html',
  styleUrl: './grid-search-filter.scss',
  standalone: true,
})
export class GridSearchFilter {
    readonly searchFilterValue  = input('');
    readonly searchFilter       = output<string>();
}
