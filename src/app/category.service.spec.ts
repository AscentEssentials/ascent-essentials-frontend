import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoryService } from './category.service';
import { environment } from '../environments/environment';
import {Category} from "./category";
import {Subcategory, SubcategoryResponse} from "./subcategory";

describe('CategoryService', () => {
  let service: CategoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });

    service = TestBed.inject(CategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all categories', () => {
    const mockCategories: Category[] = [
      { _id: '1', name: 'Category 1', description: 'Description 1' },
      { _id: '2', name: 'Category 2', description: 'Description 2' }
    ];

    service.getAllCategories().subscribe(categories => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/categories`);
    expect(req.request.method).toBe('GET');

    req.flush(mockCategories);
  });

  it('should get a category by ID', () => {
    const categoryId = '1';
    const mockCategory: Category = { _id: categoryId, name: 'Category 1', description: 'Description 1' };

    service.getCategoryById(categoryId).subscribe(category => {
      expect(category).toEqual(mockCategory);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/category?id=${categoryId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockCategory);
  });

  it('should get all subcategories', () => {
    const mockSubcategories: SubcategoryResponse[] = [
      { _id: '1', categoryId: '1', name: 'Subcategory 1', description: 'Description 1' },
      { _id: '2', categoryId: '2', name: 'Subcategory 2', description: 'Description 2' }
    ];

    service.getAllSubcategories().subscribe(subcategories => {
      expect(subcategories).toEqual(mockSubcategories);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/subcategories`);
    expect(req.request.method).toBe('GET');

    req.flush(mockSubcategories);
  });

  it('should get a subcategory by ID', () => {
    const subcategoryId = '1';
    const mockSubcategory: SubcategoryResponse = { _id: subcategoryId, categoryId: '1', name: 'Subcategory 1', description: 'Description 1' };

    service.getSubcategoryById(subcategoryId).subscribe(subcategory => {
      expect(subcategory).toEqual(mockSubcategory);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/subcategory?id=${subcategoryId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockSubcategory);
  });

  it('should create a subcategory', () => {
    const mockToken = 'mockToken';
    const mockSubcategory: Subcategory = { categoryId: '1', name: 'New Subcategory', description: 'New Description' };

    service.createSubcategory(mockSubcategory, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/subcategory`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);
    expect(req.request.body).toEqual(mockSubcategory);

    req.flush({});
  });

  it('should edit a subcategory', () => {
    const mockToken = 'mockToken';
    const mockSubcategory: SubcategoryResponse = { _id: '1', categoryId: '1', name: 'Updated Subcategory', description: 'Updated Description' };

    service.editSubcategory(mockSubcategory, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/subcategory/${mockSubcategory._id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);
    expect(req.request.body).toEqual(mockSubcategory);

    req.flush({});
  });
});
