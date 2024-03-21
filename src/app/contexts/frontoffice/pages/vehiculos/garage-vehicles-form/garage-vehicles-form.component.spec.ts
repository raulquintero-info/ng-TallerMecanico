import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageVehiclesFormComponent } from './garage-vehicles-form.component';

describe('GarageVehiclesFormComponent', () => {
  let component: GarageVehiclesFormComponent;
  let fixture: ComponentFixture<GarageVehiclesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageVehiclesFormComponent]
    });
    fixture = TestBed.createComponent(GarageVehiclesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
