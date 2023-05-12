import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietboxBoxComponent } from './dietbox-box.component';

describe('DietboxBoxComponent', () => {
  let component: DietboxBoxComponent;
  let fixture: ComponentFixture<DietboxBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietboxBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietboxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
