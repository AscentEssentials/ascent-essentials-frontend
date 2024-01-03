import { TestBed } from '@angular/core/testing';

import { SubcategoryServiceService } from './subcategory-service.service';

describe('SubcategoryServiceService', () => {
  let service: SubcategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
