import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfrontComponent } from './navfront.component';

describe('NavfrontComponent', () => {
  let component: NavfrontComponent;
  let fixture: ComponentFixture<NavfrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavfrontComponent]
    });
    fixture = TestBed.createComponent(NavfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
