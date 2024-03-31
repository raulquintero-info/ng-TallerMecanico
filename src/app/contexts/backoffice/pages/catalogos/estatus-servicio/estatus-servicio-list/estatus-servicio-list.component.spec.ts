import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusServicioListComponent } from './estatus-servicio-list.component';

describe('EstatusServicioListComponent', () => {
  let component: EstatusServicioListComponent;
  let fixture: ComponentFixture<EstatusServicioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstatusServicioListComponent]
    });
    fixture = TestBed.createComponent(EstatusServicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
