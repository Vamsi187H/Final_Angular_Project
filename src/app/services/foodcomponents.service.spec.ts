import { TestBed } from '@angular/core/testing';

import { FoodcomponentsService } from './foodcomponents.service';

describe('FoodcomponentsService', () => {
  let service: FoodcomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodcomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
