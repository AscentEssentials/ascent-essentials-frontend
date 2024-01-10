import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { environment } from '../environments/environment';
import { Cart } from './cart';

describe('CartService', () => {
  let service: CartService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });

    service = TestBed.inject(CartService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the user\'s cart', () => {
    const mockToken = 'mockToken';
    const mockCart: Cart = {
      userId: 'mockUserId',
      items: [{ productId: 'mockProductId', quantity: 1 }],
      cartTotal: 10
    };

    service.getCart(mockToken).subscribe(cart => {
      expect(cart).toEqual(mockCart);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/cart`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);

    req.flush(mockCart);
  });

  it('should add a product to the cart', () => {
    const mockToken = 'mockToken';
    const mockProductId = 'mockProductId';
    const mockQuantity = 2;

    service.addProductToCart(mockProductId, mockQuantity, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/cart/add`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);
    expect(req.request.body).toEqual({ productId: mockProductId, quantity: mockQuantity });

    req.flush({});
  });

  it('should update the quantity of a product in the cart', () => {
    const mockToken = 'mockToken';
    const mockProductId = 'mockProductId';
    const mockQuantity = 3;

    service.updateProductQuantity(mockProductId, mockQuantity, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/cart/update`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);
    expect(req.request.body).toEqual({ productId: mockProductId, quantity: mockQuantity });

    req.flush({});
  });

  it('should remove a product from the cart', () => {
    const mockToken = 'mockToken';
    const mockProductId = 'mockProductId';

    service.removeProduct(mockProductId, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/cart/remove?productId=${mockProductId}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);

    req.flush({});
  });
});
