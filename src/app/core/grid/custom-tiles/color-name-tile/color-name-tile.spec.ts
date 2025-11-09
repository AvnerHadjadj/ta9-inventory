import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNameTile } from './color-name-tile';

describe('ColorNameTile', () => {
  let component: ColorNameTile;
  let fixture: ComponentFixture<ColorNameTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorNameTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorNameTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
