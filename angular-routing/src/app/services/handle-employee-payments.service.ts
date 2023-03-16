import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeePayData } from '../interfaces/employee-pay-data';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import { HandleEmployeePaymentApiService } from './handle-employee-payment-api.service';

@Injectable({
  providedIn: 'root'
})
export class HandleEmployeePaymentsService {
  
  private employeePayData$ : Subject<EmployeePayData[]> = new BehaviorSubject<EmployeePayData[]>([])
  employeePay: Observable<EmployeePayData[]> | undefined;
  constructor(private apiService: HandleEmployeePaymentApiService) { }
  
  getEmployeePayments() : Observable<EmployeePayData[]>{
    this.loadEmployeePaymentDataFromApi();
    return this.employeePayData$.asObservable();
  }
  getEmployeePayment(id: string) : Observable<EmployeePayData>{
    return this.apiService.getEmployeePay(id);
  }
  addEmployeePayment(record: EmployeePayData){
    return this.apiService.createEmployeePayRecord(record).subscribe((t) => {
      next:{
        this.loadEmployeePaymentDataFromApi();
      }
      error:{
        (error : any ) => console.log(error);
      }
    });
    
  }
  deleteEmployeePayment(id: string){
    return this.apiService.deleteEmployeePayRecord(id).subscribe((t) => {
      next:{
        this.loadEmployeePaymentDataFromApi();
      }
      error:{
        (error : any ) => console.log(error);
      }
    });
  }
  updateEmployeePayment(id: EmployeePayData){
    return this.apiService.updateEmployeePayRecord(id).subscribe((t) => {
      next:{
        this.loadEmployeePaymentDataFromApi();
      }
      error:{
        (error : any ) => console.log(error);
      }
    });
  }
  private loadEmployeePaymentDataFromApi(){

    this.apiService.getEmployeesPay().subscribe((t) => {
      next:{
        this.employeePayData$.next(t);
      }
      error:{
        (error : any ) => console.log(error);
      }
    });
  }

}
