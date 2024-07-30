import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPdfComponent } from './services-pdf.component';

describe('ServicesPdfComponent', () => {
  let component: ServicesPdfComponent;
  let fixture: ComponentFixture<ServicesPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesPdfComponent]
    });
    fixture = TestBed.createComponent(ServicesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
