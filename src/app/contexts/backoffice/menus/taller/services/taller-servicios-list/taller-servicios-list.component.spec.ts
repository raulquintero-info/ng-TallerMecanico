import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerServiciosListComponent } from './taller-servicios-list.component';

describe('TallerServiciosListComponent', () => {
  let component: TallerServiciosListComponent;
  let fixture: ComponentFixture<TallerServiciosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallerServiciosListComponent]
    });
    fixture = TestBed.createComponent(TallerServiciosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
