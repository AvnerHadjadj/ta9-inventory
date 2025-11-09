import { Component, contentChild, input, output, TemplateRef } from '@angular/core';
import { GridSearchFilter } from '../grid-search-filter/grid-search-filter';
import { GridListCellDef, VIEW_MODE } from './grid.model';
import Icon from '../icon/icon';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ta9-grid',
  imports: [
    NgComponentOutlet,
    NgTemplateOutlet,
    GridSearchFilter,
    Icon
  ],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
  standalone: true,
})
export class Grid<T extends { id: string }> {
  readonly isSearchable       = input(true);
  readonly searchFilterValue  = input('');
  readonly viewMode           = input(VIEW_MODE.LIST);
  readonly processedData      = input<Array<T>>([]);
  readonly columns            = input<Array<GridListCellDef<T>>>([]);
  readonly sortByColumn       = input<string>('');
  readonly sortAscending      = input<boolean>(true);

  readonly searchFilter       = output<string>();
  readonly sortBy             = output<string>();
  readonly selectItem         = output<T>();
  
  readonly tileViewItemTemplateRef = contentChild("tileViewItemTemplate", {read: TemplateRef});

  readonly VIEW_MODE          = VIEW_MODE;
}
