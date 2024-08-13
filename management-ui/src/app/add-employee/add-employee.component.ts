import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Employee } from '../models/employee.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  errorMsg: string[] = [];
  empDetails: Employee = {
    firstName: '',
    lastName: '',
    avatarUrl: '',
    companyName: '',
    email: '',
    contactNo: '',
    experience: '',
    joiningDate: '',
    team: '',
    manager: '',
    designation: '',
  }
  onSubmit() {
    if (this.validateDetails()) {
      console.log('form', this.empDetails);
      return console.log('submitted')
    }
    console.log('form', this.empDetails);
  }

  validateDetails() {
    this.errorMsg = [];
    let isInValid = false;
    Object.entries(this.empDetails).forEach(([key, value]) => {
      if(key === 'email' && !this.isValidEmail()) {
        this.errorMsg.push(`${key} is invalid`);
        isInValid = true;
      } else if(key === 'contactNo' && !this.isPhoneValid()) {
        this.errorMsg.push(`${key} is invalid`);
        isInValid = true;
      } else if(value.length < 5) {
        this.errorMsg.push(`${key} is invalid`);
        isInValid = true;
      }
    });
    return !isInValid;
  }

  isValidEmail() {
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailReg.test(this.empDetails.email);
  }

  isPhoneValid() {
    return this.empDetails.contactNo?.length === 10;
  }
}
