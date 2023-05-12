import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedDietboxComponent } from './supported-dietbox.component';

describe('SupportedDietboxComponent', () => {
  let component: SupportedDietboxComponent;
  let fixture: ComponentFixture<SupportedDietboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportedDietboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportedDietboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
