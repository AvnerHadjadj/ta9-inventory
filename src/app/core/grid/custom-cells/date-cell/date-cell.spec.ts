import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCell } from './date-cell';

describe('DateCell', () => {
  let component: DateCell<string>;
  let fixture: ComponentFixture<DateCell<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCell<string>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
