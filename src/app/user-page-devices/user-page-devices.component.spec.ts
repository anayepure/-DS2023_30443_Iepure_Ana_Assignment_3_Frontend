import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDevicesComponent } from './user-page-devices.component';

describe('UserPageDevicesComponent', () => {
  let component: UserPageDevicesComponent;
  let fixture: ComponentFixture<UserPageDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
