import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageDevicesComponent } from './admin-page-devices.component';

describe('AdminPageDevicesComponent', () => {
  let component: AdminPageDevicesComponent;
  let fixture: ComponentFixture<AdminPageDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
