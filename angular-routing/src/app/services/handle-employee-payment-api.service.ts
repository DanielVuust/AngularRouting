import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeePayData } from '../interfaces/employee-pay-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleEmployeePaymentApiService {
  baseUrl: string = "https://localhost:7231/api/"; 

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesPay() : Observable<EmployeePayData[]>{
    const headers = { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'} ;
    return this.httpClient.get<EmployeePayData[]>(this.baseUrl + "v1/employeePay", { 'headers': headers }); 
  }
  getEmployeePay(id: string) : Observable<EmployeePayData>{
    const headers = { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'} ;
    return this.httpClient.get<EmployeePayData>(this.baseUrl + "v1/employeePay/" + id, { 'headers': headers }); 
  }

  createEmployeePayRecord(record: EmployeePayData){
    const headers = { 'Access-Control-Allow-Origin': '*'} ;
    //TODO Change to Map.
    const body = {
      "firstName": record.firstName,
      "lastName": record.lastName,
      "monthlyPay": record.monthlyPay
    };

    return this.httpClient.put<EmployeePayData[]>(this.baseUrl + "v1/employeePay", body, { 'headers': headers}); 
  }
  deleteEmployeePayRecord(id: string){
    const headers = { 'Access-Control-Allow-Origin': '*'} ;
    return this.httpClient.delete<EmployeePayData[]>(this.baseUrl + "v1/employeePay/" + id,  { 'headers': headers}); 
  }
  updateEmployeePayRecord(element: EmployeePayData){
    const headers = { 'Access-Control-Allow-Origin': '*'} ;

    return this.httpClient.post<EmployeePayData[]>(this.baseUrl + "v1/employeePay", element,  { 'headers': headers}); 
  }

}
