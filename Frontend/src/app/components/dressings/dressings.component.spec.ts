import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressingsComponent } from './dressings.component';

describe('DressingsComponent', () => {
  let component: DressingsComponent;
  let fixture: ComponentFixture<DressingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressingsComponent]
    });
    fixture = TestBed.createComponent(DressingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
