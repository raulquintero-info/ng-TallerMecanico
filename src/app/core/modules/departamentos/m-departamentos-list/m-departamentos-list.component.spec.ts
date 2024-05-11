import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDepartamentosListComponent } from './m-departamentos-list.component';

describe('MDepartamentosListComponent', () => {
  let component: MDepartamentosListComponent;
  let fixture: ComponentFixture<MDepartamentosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MDepartamentosListComponent]
    });
    fixture = TestBed.createComponent(MDepartamentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
