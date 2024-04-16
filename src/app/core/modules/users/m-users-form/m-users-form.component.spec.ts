import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUsersFormComponent } from './m-users-form.component';

describe('MUsersFormComponent', () => {
  let component: MUsersFormComponent;
  let fixture: ComponentFixture<MUsersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MUsersFormComponent]
    });
    fixture = TestBed.createComponent(MUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
