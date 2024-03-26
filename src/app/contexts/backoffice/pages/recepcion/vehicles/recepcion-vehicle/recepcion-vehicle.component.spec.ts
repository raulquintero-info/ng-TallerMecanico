import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionVehicleComponent } from './recepcion-vehicle.component';

describe('RecepcionVehicleComponent', () => {
  let component: RecepcionVehicleComponent;
  let fixture: ComponentFixture<RecepcionVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionVehicleComponent]
    });
    fixture = TestBed.createComponent(RecepcionVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
