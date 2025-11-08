import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InventoryStore } from '../inventory.store';
import { CommonModule } from '@angular/common';
import IconComponent from '../../../core/icon/icon';
import { VIEW_MODE } from '../inventory.model';

@Component({
  selector: 'ta9-inventory-main',
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './inventory-main.html',
  styleUrl: './inventory-main.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InventoryMain {
  readonly store = inject(InventoryStore);
  readonly VIEW_MODE = VIEW_MODE;

  eventColumns = [
    { field: 'color',         header: 'Color',        widthPercentage: 10 },
    { field: 'name',          header: 'Name',         widthPercentage: 40 },
    { field: 'createdAt',     header: 'Create Date',  widthPercentage: 15 },
    { field: 'lastUpdatedAt', header: 'Last Update',  widthPercentage: 15 },
    { field: 'createdBy',     header: 'Created By',   widthPercentage: 20 }
  ];

  addEvent() {
    this.store.createNewEvent('#000000', 'New Event', '');
  }
}
