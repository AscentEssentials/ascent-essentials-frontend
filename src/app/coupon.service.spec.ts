import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CouponService } from './coupon.service';
import { environment } from '../environments/environment';
import { Token } from './user';
import { Coupon } from './coupon';

describe('CouponService', () => {
  let service: CouponService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CouponService]
    });

    service = TestBed.inject(CouponService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all coupons', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockCoupons: Coupon[] = [
      { code: 'CODE1', discountAmount: 10 },
      { code: 'CODE2', discountAmount: 20 }
    ];

    service.getAllCoupons(mockToken).subscribe(coupons => {
      expect(coupons).toEqual(mockCoupons);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/admin/coupons`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush(mockCoupons);
  });

  it('should create a coupon', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockCoupon: Coupon = { code: 'NEWCODE', discountAmount: 15 };

    service.createCoupon(mockCoupon, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/admin/coupon`);
    expect(req.request.method).toBe('POST');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);
    expect(req.request.body).toEqual(mockCoupon);

    req.flush({});
  });

  it('should delete a coupon', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockCouponCode = 'DELETECODE';

    service.deleteCoupon(mockCouponCode, mockToken).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/admin/coupon/${mockCouponCode}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush({});
  });
});
