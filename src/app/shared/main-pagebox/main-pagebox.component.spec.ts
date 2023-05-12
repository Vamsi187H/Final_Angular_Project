import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageboxComponent } from './main-pagebox.component';

describe('MainPageboxComponent', () => {
  let component: MainPageboxComponent;
  let fixture: ComponentFixture<MainPageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
