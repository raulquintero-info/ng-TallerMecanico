import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMarcasFormComponent } from './m-marcas-form.component';

describe('MMarcasFormComponent', () => {
  let component: MMarcasFormComponent;
  let fixture: ComponentFixture<MMarcasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MMarcasFormComponent]
    });
    fixture = TestBed.createComponent(MMarcasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
