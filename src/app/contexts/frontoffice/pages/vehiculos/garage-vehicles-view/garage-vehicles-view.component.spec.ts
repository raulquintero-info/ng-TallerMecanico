import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageVehiclesViewComponent } from './garage-vehicles-view.component';

describe('GarageVehiclesViewComponent', () => {
  let component: GarageVehiclesViewComponent;
  let fixture: ComponentFixture<GarageVehiclesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageVehiclesViewComponent]
    });
    fixture = TestBed.createComponent(GarageVehiclesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
