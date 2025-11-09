import { Component, computed, contentChild, input, output, TemplateRef } from '@angular/core';
import { GridSearchFilter } from '../grid-search-filter/grid-search-filter';
import { GridListCellDef, VIEW_MODE } from './grid.model';
import Icon from '../icon/icon';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { GridPagination } from './grid-pagination/grid-pagination';

@Component({
  selector: 'ta9-grid',
  imports: [
    NgComponentOutlet,
    NgTemplateOutlet,
    GridSearchFilter,
    GridPagination,
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
  readonly currentPage        = input<number>(0);
  readonly pageSize           = input<number>(10);

  readonly searchFilter       = output<string>();
  readonly sortBy             = output<string>();
  readonly pageSelected       = output<number>();
  readonly pageSizeChanged    = output<number>();
  readonly selectItem         = output<T>();
  
  readonly tileViewItemTemplateRef = contentChild("tileViewItemTemplate", {read: TemplateRef});

  readonly VIEW_MODE          = VIEW_MODE;


  readonly currentPageItems = computed(() => {
    const processed = this.processedData();
    const page = this.currentPage();
    const size = this.pageSize();
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    return processed.slice(startIndex, endIndex);
  });

  readonly totalPages = computed(() => {
    const processed = this.processedData();
    const size = this.pageSize();
    return Math.ceil(processed.length / size);
  });
}
