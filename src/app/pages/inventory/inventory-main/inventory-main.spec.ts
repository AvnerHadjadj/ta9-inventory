import { ComponentFixture, TestBed } from '@angular/core/testing';

import InventoryMain from './inventory-main';

describe('InventoryMain', () => {
  let component: InventoryMain;
  let fixture: ComponentFixture<InventoryMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
