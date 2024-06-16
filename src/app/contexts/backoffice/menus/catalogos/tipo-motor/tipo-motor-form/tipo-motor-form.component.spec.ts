import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMotorFormComponent } from './tipo-motor-form.component';

describe('TipoMotorFormComponent', () => {
  let component: TipoMotorFormComponent;
  let fixture: ComponentFixture<TipoMotorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoMotorFormComponent]
    });
    fixture = TestBed.createComponent(TipoMotorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
