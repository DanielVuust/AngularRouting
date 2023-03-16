import { TestBed } from '@angular/core/testing';

import { HandleEmployeePaymentsService } from './handle-employee-payments.service';

describe('HandleEmployeePaymentsService', () => {
  let service: HandleEmployeePaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleEmployeePaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
