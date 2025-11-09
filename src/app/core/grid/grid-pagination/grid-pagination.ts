import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'ta9-grid-pagination',
  imports: [],
  templateUrl: './grid-pagination.html',
  styleUrl: './grid-pagination.scss',
})
export class GridPagination {

  readonly currentPage      = input<number>(1);
  readonly pageSize         = input<number>(1);
  readonly totalPages       = input<number>(1);
  readonly pageChange       = output<number>();
  readonly pageSizeChange   = output<number>();
  

  readonly pageNumbers = computed(() => {
    const totalPages = this.totalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  });

  readonly pageSizeOptions = [1, 5, 10];
}
