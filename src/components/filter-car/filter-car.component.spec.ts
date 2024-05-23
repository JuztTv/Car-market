import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCarComponent } from './filter-car.component';

describe('FilterCarComponent', () => {
  let component: FilterCarComponent;
  let fixture: ComponentFixture<FilterCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCarComponent]
    });
    fixture = TestBed.createComponent(FilterCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
