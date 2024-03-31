import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEstatusServicioFormComponent } from './m-estatus-servicio-form.component';

describe('MEstatusServicioFormComponent', () => {
  let component: MEstatusServicioFormComponent;
  let fixture: ComponentFixture<MEstatusServicioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEstatusServicioFormComponent]
    });
    fixture = TestBed.createComponent(MEstatusServicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
