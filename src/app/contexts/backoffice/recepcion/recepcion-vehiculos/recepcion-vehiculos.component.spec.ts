import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionVehiculosComponent } from './recepcion-vehiculos.component';

describe('RecepcionVehiculosComponent', () => {
  let component: RecepcionVehiculosComponent;
  let fixture: ComponentFixture<RecepcionVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionVehiculosComponent]
    });
    fixture = TestBed.createComponent(RecepcionVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
