import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCell } from './color-cell';

describe('ColorCell', () => {
  let component: ColorCell<string>;
  let fixture: ComponentFixture<ColorCell<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCell<string>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
