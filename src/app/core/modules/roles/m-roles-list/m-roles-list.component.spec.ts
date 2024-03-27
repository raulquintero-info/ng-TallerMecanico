import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRolesListComponent } from './m-roles-list.component';

describe('MRolesListComponent', () => {
  let component: MRolesListComponent;
  let fixture: ComponentFixture<MRolesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MRolesListComponent]
    });
    fixture = TestBed.createComponent(MRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
