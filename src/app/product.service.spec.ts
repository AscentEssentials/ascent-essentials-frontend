import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { environment } from '../environments/environment';
import { Token } from './user';
import { ProductResponse } from './product';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all products', () => {
    const mockProducts: ProductResponse[] = [
      { _id: '1', name: 'Product 1', brand: 'Brand 1', price: 19.99, subCategoryId: 'subCategory1', description: 'Description 1', technicalSpecifications: { type: 'Type 1', diameter: '10mm' }, quantity: 5, images: ['image1.jpg', 'image2.jpg'] },
      { _id: '2', name: 'Product 2', brand: 'Brand 2', price: 29.99, subCategoryId: 'subCategory2', description: 'Description 2', technicalSpecifications: { type: 'Type 2', diameter: '15mm' }, quantity: 3, images: ['image3.jpg', 'image4.jpg'] }
    ];

    service.getAllProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/products`);
    expect(req.request.method).toBe('GET');

    req.flush(mockProducts);
  });

  it('should get products by category', () => {
    const subcategoryId = 'subCategory1';
    const mockProducts: ProductResponse[] = [
      { _id: '1', name: 'Product 1', brand: 'Brand 1', price: 19.99, subCategoryId: 'subCategory1', description: 'Description 1', technicalSpecifications: { type: 'Type 1', diameter: '10mm' }, quantity: 5, images: ['image1.jpg', 'image2.jpg'] },
      { _id: '3', name: 'Product 3', brand: 'Brand 3', price: 24.99, subCategoryId: 'subCategory1', description: 'Description 3', technicalSpecifications: { type: 'Type 3', diameter: '12mm' }, quantity: 2, images: ['image5.jpg', 'image6.jpg'] }
    ];

    service.getProductsByCategory(subcategoryId).subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/products/category/${subcategoryId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockProducts);
  });

  it('should get products by subcategory', () => {
    const categoryId = 'category1';
    const mockProducts: ProductResponse[] = [
      { _id: '1', name: 'Product 1', brand: 'Brand 1', price: 19.99, subCategoryId: 'subCategory1', description: 'Description 1', technicalSpecifications: { type: 'Type 1', diameter: '10mm' }, quantity: 5, images: ['image1.jpg', 'image2.jpg'] },
      { _id: '3', name: 'Product 3', brand: 'Brand 3', price: 24.99, subCategoryId: 'subCategory2', description: 'Description 3', technicalSpecifications: { type: 'Type 3', diameter: '12mm' }, quantity: 2, images: ['image5.jpg', 'image6.jpg'] }
    ];

    service.getProductsBySubcategory(categoryId).subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/products/subcategory/${categoryId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockProducts);
  });

  it('should get products by query', () => {
    const query = 'searchQuery';
    const mockProducts: ProductResponse[] = [
      { _id: '1', name: 'Product 1', brand: 'Brand 1', price: 19.99, subCategoryId: 'subCategory1', description: 'Description 1', technicalSpecifications: { type: 'Type 1', diameter: '10mm' }, quantity: 5, images: ['image1.jpg', 'image2.jpg'] },
      { _id: '3', name: 'Product 3', brand: 'Brand 3', price: 24.99, subCategoryId: 'subCategory2', description: 'Description 3', technicalSpecifications: { type: 'Type 3', diameter: '12mm' }, quantity: 2, images: ['image5.jpg', 'image6.jpg'] }
    ];

    service.getProductsByQuery(query).subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/products/search?query=${query}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockProducts);
  });

  it('should get product by ID', () => {
    const productId = '1';
    const mockProduct: ProductResponse = { _id: productId, name: 'Product 1', brand: 'Brand 1', price: 19.99, subCategoryId: 'subCategory1', description: 'Description 1', technicalSpecifications: { type: 'Type 1', diameter: '10mm' }, quantity: 5, images: ['image1.jpg', 'image2.jpg'] };

    service.getProductById(productId).subscribe(product => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/product/${productId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockProduct);
  });

  it('should get products by multiple IDs', () => {
    const productIds = ['1', '2'];
    const mockProducts: ProductResponse[] = [
      { _id: '1', name: 'Product 1', brand: 'Brand 1', price: 19.99, subCategoryId: 'subCategory1', description: 'Description 1', technicalSpecifications: { type: 'Type 1', diameter: '10mm' }, quantity: 5, images: ['image1.jpg', 'image2.jpg'] },
      { _id: '2', name: 'Product 2', brand: 'Brand 2', price: 29.99, subCategoryId: 'subCategory2', description: 'Description 2', technicalSpecifications: { type: 'Type 2', diameter: '15mm' }, quantity: 3, images: ['image3.jpg', 'image4.jpg'] }
    ];

    service.getProductsById(productIds).subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req1 = httpTestingController.expectOne(`${environment.apiUrl}/product/1`);
    const req2 = httpTestingController.expectOne(`${environment.apiUrl}/product/2`);

    expect(req1.request.method).toBe('GET');
    expect(req2.request.method).toBe('GET');

    req1.flush(mockProducts[0]);
    req2.flush(mockProducts[1]);
  });

  it('should get product image', () => {
    const imageName = 'image1.jpg';
    const mockImage: string = 'base64encodedimage';

    service.getProductImage(imageName).subscribe(image => {
      expect(image).toEqual(mockImage);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/product/image/${imageName}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockImage);
  });

  it('should delete product by ID', () => {
    const mockToken: Token = { token: 'mockToken' };
    const productId = '1';

    service.deleteProductById(productId, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/product/${productId}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush({});
  });
});
