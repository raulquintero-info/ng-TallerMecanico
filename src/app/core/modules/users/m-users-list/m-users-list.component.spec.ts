import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUsersListComponent } from './m-users-list.component';

describe('MUsersListComponent', () => {
  let component: MUsersListComponent;
  let fixture: ComponentFixture<MUsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MUsersListComponent]
    });
    fixture = TestBed.createComponent(MUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
