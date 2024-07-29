import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPdfComponent } from './customers-pdf.component';

describe('CustomersPdfComponent', () => {
  let component: CustomersPdfComponent;
  let fixture: ComponentFixture<CustomersPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersPdfComponent]
    });
    fixture = TestBed.createComponent(CustomersPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
