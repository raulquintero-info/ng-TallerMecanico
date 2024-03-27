import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMotorListComponent } from './tipo-motor-list.component';

describe('TipoMotorListComponent', () => {
  let component: TipoMotorListComponent;
  let fixture: ComponentFixture<TipoMotorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoMotorListComponent]
    });
    fixture = TestBed.createComponent(TipoMotorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
