import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTagsComponent } from './bottom-tags.component';

describe('BottomTagsComponent', () => {
  let component: BottomTagsComponent;
  let fixture: ComponentFixture<BottomTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomTagsComponent]
    });
    fixture = TestBed.createComponent(BottomTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
