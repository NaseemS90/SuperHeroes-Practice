import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTableDataComponent } from './filter-table-data.component';

describe('FilterTableDataComponent', () => {
  let component: FilterTableDataComponent;
  let fixture: ComponentFixture<FilterTableDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTableDataComponent]
    });
    fixture = TestBed.createComponent(FilterTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
