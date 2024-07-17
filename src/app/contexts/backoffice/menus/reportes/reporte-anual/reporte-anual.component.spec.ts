import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAnualComponent } from './reporte-anual.component';

describe('ReporteAnualComponent', () => {
  let component: ReporteAnualComponent;
  let fixture: ComponentFixture<ReporteAnualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteAnualComponent]
    });
    fixture = TestBed.createComponent(ReporteAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
