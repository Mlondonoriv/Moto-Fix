import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkelletonTagsComponent } from './skelleton-tags.component';

describe('SkelletonTagsComponent', () => {
  let component: SkelletonTagsComponent;
  let fixture: ComponentFixture<SkelletonTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkelletonTagsComponent]
    });
    fixture = TestBed.createComponent(SkelletonTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
