import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerVehicleListComponent } from './taller-vehicle-list.component';

describe('TallerVehicleListComponent', () => {
  let component: TallerVehicleListComponent;
  let fixture: ComponentFixture<TallerVehicleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallerVehicleListComponent]
    });
    fixture = TestBed.createComponent(TallerVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
