import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusServicioFormComponent } from './estatus-servicio-form.component';

describe('EstatusServicioFormComponent', () => {
  let component: EstatusServicioFormComponent;
  let fixture: ComponentFixture<EstatusServicioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstatusServicioFormComponent]
    });
    fixture = TestBed.createComponent(EstatusServicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
