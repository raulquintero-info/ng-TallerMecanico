import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCustomersListComponent } from './m-customers-list.component';

describe('MCustomersListComponent', () => {
  let component: MCustomersListComponent;
  let fixture: ComponentFixture<MCustomersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MCustomersListComponent]
    });
    fixture = TestBed.createComponent(MCustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
