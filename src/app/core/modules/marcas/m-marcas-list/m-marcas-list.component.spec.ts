import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMarcasListComponent } from './m-marcas-list.component';

describe('MMarcasListComponent', () => {
  let component: MMarcasListComponent;
  let fixture: ComponentFixture<MMarcasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MMarcasListComponent]
    });
    fixture = TestBed.createComponent(MMarcasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
