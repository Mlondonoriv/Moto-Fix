import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTagsComponent } from './top-tags.component';

describe('TopTagsComponent', () => {
  let component: TopTagsComponent;
  let fixture: ComponentFixture<TopTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTagsComponent]
    });
    fixture = TestBed.createComponent(TopTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
