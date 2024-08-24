import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MModelosFormComponent } from './m-modelos-form.component';

describe('MModelosFormComponent', () => {
  let component: MModelosFormComponent;
  let fixture: ComponentFixture<MModelosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MModelosFormComponent]
    });
    fixture = TestBed.createComponent(MModelosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
