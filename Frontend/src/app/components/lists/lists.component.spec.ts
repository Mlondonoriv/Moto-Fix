import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LISTSComponent } from './lists.component';

describe('LISTSComponent', () => {
  let component: LISTSComponent;
  let fixture: ComponentFixture<LISTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LISTSComponent]
    });
    fixture = TestBed.createComponent(LISTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
