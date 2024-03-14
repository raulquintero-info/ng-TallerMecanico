import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionServiciosComponent } from './recepcion-servicios.component';

describe('RecepcionServiciosComponent', () => {
  let component: RecepcionServiciosComponent;
  let fixture: ComponentFixture<RecepcionServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionServiciosComponent]
    });
    fixture = TestBed.createComponent(RecepcionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
