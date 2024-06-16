import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasListComponent } from './marcas-list.component';

describe('MarcasListComponent', () => {
  let component: MarcasListComponent;
  let fixture: ComponentFixture<MarcasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcasListComponent]
    });
    fixture = TestBed.createComponent(MarcasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
