import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionVehiculoComponent } from './recepcion-vehiculo.component';

describe('RecepcionVehiculoComponent', () => {
  let component: RecepcionVehiculoComponent;
  let fixture: ComponentFixture<RecepcionVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionVehiculoComponent]
    });
    fixture = TestBed.createComponent(RecepcionVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
