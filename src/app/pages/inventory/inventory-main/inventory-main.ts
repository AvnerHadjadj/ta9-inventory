import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InventoryStore } from '../inventory.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ta9-inventory-main',
  imports: [CommonModule],
  templateUrl: './inventory-main.html',
  styleUrl: './inventory-main.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InventoryMain {
  readonly store = inject(InventoryStore);

  //   id: number;
  // color: string;
  // name: string;
  // description: string;
  // createdAt: Date;
  // lastUpdatedAt: Date;
  // createdBy: string;
  eventColumns = [
    { field: 'color', header: 'Color' },
    { field: 'name', header: 'Name' },
    { field: 'createdAt', header: 'Create Date' },
    { field: 'lastUpdatedAt', header: 'Last Update' },
    { field: 'createdBy', header: 'Created By' }
  ];
  
  addEvent() {
    this.store.createNewEvent('#000000', 'New Event', '');
  }
}
