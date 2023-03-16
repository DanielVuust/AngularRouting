import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeePayData } from 'src/app/interfaces/employee-pay-data';
import { HandleEmployeePaymentsService } from 'src/app/services/handle-employee-payments.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-employee-payments-form',
  templateUrl: './employee-payments-form.component.html',
  styleUrls: ['./employee-payments-form.component.css']
})
export class EmployeePaymentsFormComponent {
  id: string | null = null;
  private sub: any;

  contactForm: FormGroup;
  constructor(private route: ActivatedRoute, private service: HandleEmployeePaymentsService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      id: new FormControl('', ),
      firstName: new FormControl('', [Validators.required, ]),
      lastName: new FormControl('', [Validators.required, ]),
      monthlyPay: new FormControl('', [Validators.required, ]),
      
    });
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      if(params['id'] == 'new'){
        return;
      }
      this.id = params['id']; 
        this.service.getEmployeePayment(this.id!).subscribe((e) => {
          this.contactForm.patchValue({"id": e.id});
          this.contactForm.patchValue({"firstName": e.firstName});
          this.contactForm.patchValue({"lastName": e.lastName});
          this.contactForm.patchValue({"monthlyPay": e.monthlyPay});
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  submit(){
    if (this.contactForm.valid) {
      if(this.contactForm.value['id'] != 'new'){
        this.service.addEmployeePayment(this.contactForm.value);
      }
      else{
        this.service.updateEmployeePayment(this.contactForm.value);
      }
    } else {
      console.error("Form is invalid!");
    }
  }
}
