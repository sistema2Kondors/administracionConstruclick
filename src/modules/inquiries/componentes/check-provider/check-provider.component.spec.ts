import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckProviderComponent } from './check-provider.component';

describe('CheckProviderComponent', () => {
  let component: CheckProviderComponent;
  let fixture: ComponentFixture<CheckProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
