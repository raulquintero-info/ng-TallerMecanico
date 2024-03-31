import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEstatusServicioListComponent } from './m-estatus-servicio-list.component';

describe('MEstatusServicioListComponent', () => {
  let component: MEstatusServicioListComponent;
  let fixture: ComponentFixture<MEstatusServicioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEstatusServicioListComponent]
    });
    fixture = TestBed.createComponent(MEstatusServicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
