import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerServiciosComponent } from './taller-servicios.component';

describe('TallerServiciosComponent', () => {
  let component: TallerServiciosComponent;
  let fixture: ComponentFixture<TallerServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallerServiciosComponent]
    });
    fixture = TestBed.createComponent(TallerServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
