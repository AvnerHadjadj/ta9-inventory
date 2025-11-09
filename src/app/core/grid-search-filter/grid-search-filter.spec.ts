import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSearchFilter } from './grid-search-filter';

describe('GridSearchFilter', () => {
  let component: GridSearchFilter;
  let fixture: ComponentFixture<GridSearchFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSearchFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSearchFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
