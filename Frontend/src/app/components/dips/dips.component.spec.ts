import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipsComponent } from './dips.component';

describe('DipsComponent', () => {
  let component: DipsComponent;
  let fixture: ComponentFixture<DipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DipsComponent]
    });
    fixture = TestBed.createComponent(DipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
