import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Employee } from '../models/employee.model';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addEmployee, updateSingleEmployee } from '../store/employee.actions';
import { AvatarsComponent } from '../avatars/avatars.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    AvatarsComponent,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  @Input() employee: Employee | undefined;
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
  @Input() edit = false;
  errorMsg: string[] = [];
  @Output() closed = new EventEmitter();
  constructor(private store: Store, private modalService: NgbModal){}

  ngOnInit(): void {
      if(this.employee) {
        this.empDetails = {
          ...this.employee
        }
      }
  }
  setAvatar(avatar: string) {
    this.empDetails.avatarUrl = avatar;
    this.modalService.dismissAll();
  }
  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
  onSubmit() {
    if (this.validateDetails()) {
      console.log('form', this.empDetails);
      if (this.edit) {
        this.store.dispatch(updateSingleEmployee({ id: this.empDetails.id || '', employee: this.empDetails}));
      } else {
        this.store.dispatch(addEmployee({ employee: this.empDetails}));
      }
      this.closed.emit(true);
    }
  }

  onCancel() {
    this.closed.emit(true); 
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
      } else if(value.length < 3 && key !== 'experience') {
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
