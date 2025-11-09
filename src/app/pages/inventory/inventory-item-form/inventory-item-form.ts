import { Component, input, model, output } from '@angular/core';
import { InventoryEvent } from '../inventory.model';
import Icon from '../../../core/icon/icon';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ta9-inventory-item-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Icon
  ],
  templateUrl: './inventory-item-form.html',
  styleUrl: './inventory-item-form.scss',
})
export class InventoryItemForm {
  readonly item       = input<InventoryEvent | null>(null);
  readonly closeForm  = output<void>();
  readonly saveItem   = output<InventoryEvent>();


  protected formItem = new FormGroup({
    color:          new FormControl(''),
    name:           new FormControl(''),
    description:    new FormControl(''),
  });
  
  ngOnChanges() {
    const item = this.item();

    if (item?.id) {
      this.formItem.patchValue(item);
    }
    else {
      this.formItem.setValue({
        color:        '#000000',
        name:         '',
        description:  '',
      });
    }
  }

  save() {
    const current = this.item();
    const itemToSave: InventoryEvent = {
      id:             current?.id ?? '',
      color:          this.formItem.value.color ?? '',
      name:           this.formItem.value.name ?? '',
      description:    this.formItem.value.description ?? '',
      createdAt:      current?.createdAt ?? new Date(),
      createdBy:      current?.createdBy ?? 'Current User',
      lastUpdatedAt:  new Date(),
    };

    this.saveItem.emit(itemToSave);
  }
}
