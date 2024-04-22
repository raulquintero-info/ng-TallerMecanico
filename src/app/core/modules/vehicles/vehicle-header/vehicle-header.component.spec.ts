import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHeaderComponent } from './vehicle-header.component';

describe('VehicleHeaderComponent', () => {
  let component: VehicleHeaderComponent;
  let fixture: ComponentFixture<VehicleHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleHeaderComponent]
    });
    fixture = TestBed.createComponent(VehicleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
