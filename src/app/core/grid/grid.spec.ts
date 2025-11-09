import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid } from './grid';
import { InventoryEvent } from '../../pages/inventory/inventory.model';

describe('Grid', () => {
  let component: Grid<InventoryEvent>;
  let fixture: ComponentFixture<Grid<InventoryEvent>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid<InventoryEvent>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
