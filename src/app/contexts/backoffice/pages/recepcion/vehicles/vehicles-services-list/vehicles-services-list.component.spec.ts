import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesServicesListComponent } from './vehicles-services-list.component';

describe('VehiclesServicesListComponent', () => {
  let component: VehiclesServicesListComponent;
  let fixture: ComponentFixture<VehiclesServicesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesServicesListComponent]
    });
    fixture = TestBed.createComponent(VehiclesServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
