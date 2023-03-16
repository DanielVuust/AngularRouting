import { TestBed } from '@angular/core/testing';

import { HandleEmployeePaymentApiService } from './handle-employee-payment-api.service';

describe('HandleEmployeePaymentApiService', () => {
  let service: HandleEmployeePaymentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleEmployeePaymentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
