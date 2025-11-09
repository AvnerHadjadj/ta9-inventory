import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InventoryStore } from '../inventory.store';
import { CommonModule } from '@angular/common';
import Icon from '../../../core/icon/icon';
import { Grid } from '../../../core/grid/grid';
import { GridListCellDef, VIEW_MODE } from '../../../core/grid/grid.model';
import { InventoryEvent } from '../inventory.model';
import { ColorCell } from '../../../core/grid/custom-cells/color-cell/color-cell';
import { ColorNameTile } from '../../../core/grid/custom-tiles/color-name-tile/color-name-tile';
import { DateCell } from '../../../core/grid/custom-cells/date-cell/date-cell';

@Component({
  selector: 'ta9-inventory-main',
  imports: [
    CommonModule,
    Icon,
    Grid,
    ColorNameTile
],
  templateUrl: './inventory-main.html',
  styleUrl: './inventory-main.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InventoryMain {
  readonly store = inject(InventoryStore);
  readonly VIEW_MODE = VIEW_MODE;

  eventColumns: GridListCellDef<InventoryEvent>[] = [
    { field: 'color',         header: 'Color',        widthPercentage: 10, customCell: { component: ColorCell } },
    { field: 'name',          header: 'Name',         widthPercentage: 40 },
    { field: 'createdAt',     header: 'Create Date',  widthPercentage: 15, customCell: { component: DateCell } },
    { field: 'lastUpdatedAt', header: 'Last Update',  widthPercentage: 15, customCell: { component: DateCell } },
    { field: 'createdBy',     header: 'Created By',   widthPercentage: 20 }
  ];

  openSideDrawer() {
    this.store.createNewEvent('#000000', 'New Event', '');
  }
}
