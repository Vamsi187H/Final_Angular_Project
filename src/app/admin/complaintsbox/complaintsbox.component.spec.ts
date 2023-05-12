import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsboxComponent } from './complaintsbox.component';

describe('ComplaintsboxComponent', () => {
  let component: ComplaintsboxComponent;
  let fixture: ComponentFixture<ComplaintsboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
