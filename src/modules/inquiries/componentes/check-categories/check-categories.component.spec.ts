import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCategoriesComponent } from './check-categories.component';

describe('CheckCategoriesComponent', () => {
  let component: CheckCategoriesComponent;
  let fixture: ComponentFixture<CheckCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
