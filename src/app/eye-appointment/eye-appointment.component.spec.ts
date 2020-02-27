import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeAppointmentComponent } from './eye-appointment.component';

describe('EyeAppointmentComponent', () => {
  let component: EyeAppointmentComponent;
  let fixture: ComponentFixture<EyeAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
