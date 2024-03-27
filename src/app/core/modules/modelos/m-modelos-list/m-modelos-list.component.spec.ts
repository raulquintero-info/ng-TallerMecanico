import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MModelosListComponent } from './m-modelos-list.component';

describe('ModelosListComponent', () => {
  let component: MModelosListComponent;
  let fixture: ComponentFixture<MModelosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MModelosListComponent]
    });
    fixture = TestBed.createComponent(MModelosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
