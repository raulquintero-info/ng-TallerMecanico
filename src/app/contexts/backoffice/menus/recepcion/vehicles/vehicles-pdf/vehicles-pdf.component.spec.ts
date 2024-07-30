import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesPdfComponent } from './vehicles-pdf.component';

describe('VehiclesPdfComponent', () => {
  let component: VehiclesPdfComponent;
  let fixture: ComponentFixture<VehiclesPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesPdfComponent]
    });
    fixture = TestBed.createComponent(VehiclesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
