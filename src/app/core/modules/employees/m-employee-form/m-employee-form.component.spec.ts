import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEmployeeFormComponent } from './m-employee-form.component';

describe('MEmployeeFormComponent', () => {
  let component: MEmployeeFormComponent;
  let fixture: ComponentFixture<MEmployeeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEmployeeFormComponent]
    });
    fixture = TestBed.createComponent(MEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
