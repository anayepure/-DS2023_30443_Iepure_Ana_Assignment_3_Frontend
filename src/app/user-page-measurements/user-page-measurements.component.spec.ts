import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageMeasurementsComponent } from './user-page-measurements.component';

describe('UserPageComponent', () => {
  let component: UserPageMeasurementsComponent;
  let fixture: ComponentFixture<UserPageMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
