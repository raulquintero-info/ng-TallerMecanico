import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHttp503Component } from './error-http503.component';

describe('ErrorHttp503Component', () => {
  let component: ErrorHttp503Component;
  let fixture: ComponentFixture<ErrorHttp503Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorHttp503Component]
    });
    fixture = TestBed.createComponent(ErrorHttp503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
