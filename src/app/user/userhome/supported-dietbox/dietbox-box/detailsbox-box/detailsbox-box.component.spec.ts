import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsboxBoxComponent } from './detailsbox-box.component';

describe('DetailsboxBoxComponent', () => {
  let component: DetailsboxBoxComponent;
  let fixture: ComponentFixture<DetailsboxBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsboxBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsboxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
