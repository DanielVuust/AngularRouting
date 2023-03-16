import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePaymentsFormComponent } from './employee-payments-form.component';

describe('EmployeePaymentsFormComponent', () => {
  let component: EmployeePaymentsFormComponent;
  let fixture: ComponentFixture<EmployeePaymentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePaymentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePaymentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
