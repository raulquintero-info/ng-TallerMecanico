import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEmployeesListComponent } from './m-employees-list.component';

describe('MEmployeesListComponent', () => {
  let component: MEmployeesListComponent;
  let fixture: ComponentFixture<MEmployeesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MEmployeesListComponent]
    });
    fixture = TestBed.createComponent(MEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
