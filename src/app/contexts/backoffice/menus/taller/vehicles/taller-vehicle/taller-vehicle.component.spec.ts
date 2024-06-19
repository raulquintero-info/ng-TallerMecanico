import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerVehicleComponent } from './taller-vehicle.component';

describe('TallerVehicleComponent', () => {
  let component: TallerVehicleComponent;
  let fixture: ComponentFixture<TallerVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallerVehicleComponent]
    });
    fixture = TestBed.createComponent(TallerVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
