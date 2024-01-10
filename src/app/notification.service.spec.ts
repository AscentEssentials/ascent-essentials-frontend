import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NotificationService } from './notification.service';
import { environment } from '../environments/environment';
import { Token } from './user';
import { NotificationResponse } from './notification';

describe('NotificationService', () => {
  let service: NotificationService;
  let httpTestingController: HttpTestingController;

  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotificationService],
    });

    service = TestBed.inject(NotificationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get customer notifications', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockNotifications: NotificationResponse[] = [
      { _id: '1', message: 'Notification 1', createdAt: new Date() },
      { _id: '2', message: 'Notification 2', createdAt: new Date() },
    ];

    service.getCustomerNotifications(mockToken).subscribe((notifications) => {
      expect(notifications).toEqual(mockNotifications);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/notifications`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush(mockNotifications);
  });

  it('should get supplier notifications', () => {
    const mockToken: Token = { token: 'mockToken' };
    const mockNotifications: NotificationResponse[] = [
      { _id: '1', message: 'Notification 1', createdAt: new Date() },
      { _id: '2', message: 'Notification 2', createdAt: new Date() },
    ];

    service.getSupplierNotifications(mockToken).subscribe((notifications) => {
      expect(notifications).toEqual(mockNotifications);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/admin/notifications`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush(mockNotifications);
  });

  it('should delete customer notification', () => {
    const mockToken: Token = { token: 'mockToken' };
    const notificationId = '1';

    service.deleteCustomerNotification(notificationId, mockToken).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${apiUrl}/notifications/${notificationId}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush({});
  });

  it('should delete supplier notification', () => {
    const mockToken: Token = { token: 'mockToken' };
    const notificationId = '1';

    service.deleteSupplierNotification(notificationId, mockToken).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${apiUrl}/admin/notifications/${notificationId}`);
    expect(req.request.method).toBe('DELETE');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken.token}`);

    req.flush({});
  });

  it('should handle get customer notifications error', () => {
    const mockToken: Token = { token: 'mockToken' };

    service.getCustomerNotifications(mockToken).subscribe(
      () => fail('Expected an error, but received a successful response'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpTestingController.expectOne(`${apiUrl}/notifications`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('Network error'));
  });

  it('should handle delete supplier notification error', () => {
    const mockToken: Token = { token: 'mockToken' };
    const notificationId = '1';

    service.deleteSupplierNotification(notificationId, mockToken).subscribe(
      () => fail('Expected an error, but received a successful response'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpTestingController.expectOne(`${apiUrl}/admin/notifications/${notificationId}`);
    expect(req.request.method).toBe('DELETE');
  });
});
