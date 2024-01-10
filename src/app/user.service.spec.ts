import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from '../environments/environment';
import { User } from './user';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', () => {
    const mockUser: User = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Main St',
      addressNumber: 'Apt 4',
      zipCode: '12345',
      telephoneNumber: '555-1234',
      password: 'password123',
      isAdmin: false
    };

    service.registerUser(mockUser).subscribe(token => {
      expect(token.token).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush({ token: 'mockToken' });
  });

  it('should login a user', () => {
    const mockCredentials = { email: 'john.doe@example.com', password: 'password123' };

    service.loginUser(mockCredentials).subscribe(token => {
      expect(token.token).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockCredentials);

    req.flush({ token: 'mockToken' });
  });

  it('should get user details', () => {
    const mockToken = 'mockToken';
    const mockUser: User = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Main St',
      addressNumber: 'Apt 4',
      zipCode: '12345',
      telephoneNumber: '555-1234',
      password: 'password123',
      isAdmin: false
    };

    service.getUserDetails(mockToken).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/user`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockToken}`);

    req.flush(mockUser);
  });
});
