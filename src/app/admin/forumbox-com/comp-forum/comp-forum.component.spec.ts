import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompForumComponent } from './comp-forum.component';

describe('CompForumComponent', () => {
  let component: CompForumComponent;
  let fixture: ComponentFixture<CompForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
