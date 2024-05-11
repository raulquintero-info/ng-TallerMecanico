import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosFormComponent } from './departamentos-form.component';

describe('DepartamentosFormComponent', () => {
  let component: DepartamentosFormComponent;
  let fixture: ComponentFixture<DepartamentosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosFormComponent]
    });
    fixture = TestBed.createComponent(DepartamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
