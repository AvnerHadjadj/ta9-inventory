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

  addEvent() {
    this.store.createNewEvent('#000000', 'New Event', '');
  }
}
