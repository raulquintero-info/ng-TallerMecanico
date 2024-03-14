import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerServicioComponent } from './Taller-Servicio.component';

describe('Taller-ServicioComponent', () => {
  let component: TallerServicioComponent;
  let fixture: ComponentFixture<TallerServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallerServicioComponent]
    });
    fixture = TestBed.createComponent(TallerServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
