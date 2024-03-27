import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTiposMotorListComponent } from './m-tipos-motor-list.component';

describe('MTiposMotorListComponent', () => {
  let component: MTiposMotorListComponent;
  let fixture: ComponentFixture<MTiposMotorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MTiposMotorListComponent]
    });
    fixture = TestBed.createComponent(MTiposMotorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
