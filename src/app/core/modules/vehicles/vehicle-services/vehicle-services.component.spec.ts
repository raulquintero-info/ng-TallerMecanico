import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleServicesComponent } from './vehicle-services.component';

describe('VehicleServicesComponent', () => {
  let component: VehicleServicesComponent;
  let fixture: ComponentFixture<VehicleServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleServicesComponent]
    });
    fixture = TestBed.createComponent(VehicleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
