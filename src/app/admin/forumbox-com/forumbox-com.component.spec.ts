import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumboxComComponent } from './forumbox-com.component';

describe('ForumboxComComponent', () => {
  let component: ForumboxComComponent;
  let fixture: ComponentFixture<ForumboxComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumboxComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumboxComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
