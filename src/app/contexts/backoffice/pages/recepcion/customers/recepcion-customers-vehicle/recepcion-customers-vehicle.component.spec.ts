import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionCustomersVehicleComponent } from './recepcion-customers-vehicle.component';

describe('RecepcionCustomersVehicleComponent', () => {
  let component: RecepcionCustomersVehicleComponent;
  let fixture: ComponentFixture<RecepcionCustomersVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionCustomersVehicleComponent]
    });
    fixture = TestBed.createComponent(RecepcionCustomersVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
