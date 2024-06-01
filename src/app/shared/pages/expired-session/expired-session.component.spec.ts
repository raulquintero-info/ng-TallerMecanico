import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredSessionComponent } from './expired-session.component';

describe('ExpiredSessionComponent', () => {
  let component: ExpiredSessionComponent;
  let fixture: ComponentFixture<ExpiredSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiredSessionComponent]
    });
    fixture = TestBed.createComponent(ExpiredSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
