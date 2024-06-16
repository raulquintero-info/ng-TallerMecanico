import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosListComponent } from './modelos-list.component';

describe('ModelosListComponent', () => {
  let component: ModelosListComponent;
  let fixture: ComponentFixture<ModelosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelosListComponent]
    });
    fixture = TestBed.createComponent(ModelosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
