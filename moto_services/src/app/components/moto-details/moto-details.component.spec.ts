import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDetailsComponent } from './moto-details.component';

describe('MotoDetailsComponent', () => {
  let component: MotoDetailsComponent;
  let fixture: ComponentFixture<MotoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotoDetailsComponent]
    });
    fixture = TestBed.createComponent(MotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
