import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDeviceComponent } from './link-device.component';

describe('LinkDeviceComponent', () => {
  let component: LinkDeviceComponent;
  let fixture: ComponentFixture<LinkDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
