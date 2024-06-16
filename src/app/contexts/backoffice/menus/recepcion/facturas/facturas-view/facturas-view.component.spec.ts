import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasViewComponent } from './facturas-view.component';

describe('FacturasViewComponent', () => {
  let component: FacturasViewComponent;
  let fixture: ComponentFixture<FacturasViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturasViewComponent]
    });
    fixture = TestBed.createComponent(FacturasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
