import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVehicleListComponent } from './m-vehicle-list.component';

describe('MVehicleListComponent', () => {
  let component: MVehicleListComponent;
  let fixture: ComponentFixture<MVehicleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MVehicleListComponent]
    });
    fixture = TestBed.createComponent(MVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
