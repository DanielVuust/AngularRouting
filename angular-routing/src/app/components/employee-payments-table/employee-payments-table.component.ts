import { Component } from '@angular/core';
import { HandleEmployeePaymentsService } from 'src/app/services/handle-employee-payments.service';
import { Observable } from 'rxjs';
import { EmployeePayData } from 'src/app/interfaces/employee-pay-data';

@Component({
  selector: 'app-employee-payments-table',
  templateUrl: './employee-payments-table.component.html',
  styleUrls: ['./employee-payments-table.component.css']
})
export class EmployeePaymentsTableComponent {
  tableData$!: Observable<EmployeePayData[]>;
  constructor(private service: HandleEmployeePaymentsService) {
    
  }
  ngOnInit(){
    this.tableData$ = this.service.getEmployeePayments();
  }
  deleteRow(id: string){
    this.service.deleteEmployeePayment(id);
  }
}
