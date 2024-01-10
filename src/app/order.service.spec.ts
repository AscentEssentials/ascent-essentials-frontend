import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';
import { environment } from '../environments/environment';
import { Token } from './user';
import { NewOrder, OrderResponse } from './order';

describe('OrderService', () => {
  let service: OrderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });

    service = TestBed.inject(OrderService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an order', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockOrder: NewOrder = {
      creditCardNumber: 1234567890123456,
      creditCardExpirationDate: new Date(),
      ccv: 123,
      couponCode: 'COUPON123'
    };

    service.createOrder(mockOrder, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/order`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);
    expect(req.request.body).toEqual({ couponCode: mockOrder.couponCode });

    req.flush({});
  });

  it('should get customer orders', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockOrders: OrderResponse[] = [
      {
        _id: '1',
        userId: 'userId',
        userAddress: {
          address: '123 Main St',
          addressNumber: 'Apt 4',
          zipCode: '12345',
          telephoneNumber: '555-1234'
        },
        items: [
          {
            productId: 'product1',
            name: 'Product 1',
            brand: 'Brand 1',
            price: 20.99,
            subCategoryId: 'subCategory1',
            description: 'Description 1',
            technicalSpecifications: {
              type: 'Type 1',
              diameter: '10mm'
            },
            quantity: 2,
            images: ['image1.jpg', 'image2.jpg']
          },
        ],
        shippingCosts: 5.99,
        orderTotal: 47.97,
        status: 'shipped',
        createdAt: '2022-01-01T12:00:00Z'
      },
    ];

    service.getCustomerOrders(mockToken).subscribe(orders => {
      expect(orders).toEqual(mockOrders);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/orders`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush(mockOrders);
  });

  it('should get all orders for admin', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockOrders: OrderResponse[] = [
      {
        _id: '1',
        userId: 'userId',
        userAddress: {
          address: '123 Main St',
          addressNumber: 'Apt 4',
          zipCode: '12345',
          telephoneNumber: '555-1234'
        },
        items: [
          {
            productId: 'product1',
            name: 'Product 1',
            brand: 'Brand 1',
            price: 20.99,
            subCategoryId: 'subCategory1',
            description: 'Description 1',
            technicalSpecifications: {
              type: 'Type 1',
              diameter: '10mm'
            },
            quantity: 2,
            images: ['image1.jpg', 'image2.jpg']
          },
        ],
        shippingCosts: 5.99,
        orderTotal: 47.97,
        status: 'shipped',
        createdAt: '2022-01-01T12:00:00Z'
      },
    ];

    service.getAllOrders(mockToken).subscribe(orders => {
      expect(orders).toEqual(mockOrders);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/admin/orders`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush(mockOrders);
  });

  it('should edit order status', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockOrderId = '1';
    const mockState = 'shipped';

    service.editOrderStatus(mockOrderId, mockState, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/admin/orders/${mockOrderId}/status`);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);
    expect(req.request.body).toEqual({ status: mockState });

    req.flush({});
  });
});
