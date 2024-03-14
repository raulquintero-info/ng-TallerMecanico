import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionClientesComponent } from './recepcion-clientes.component';

describe('RecepcionClientesComponent', () => {
  let component: RecepcionClientesComponent;
  let fixture: ComponentFixture<RecepcionClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepcionClientesComponent]
    });
    fixture = TestBed.createComponent(RecepcionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
