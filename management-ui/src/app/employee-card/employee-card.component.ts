import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Employee } from '../models/employee.model';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { deleteEmployee } from '../store/employee.actions';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    EmployeeCardComponent,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() editEmp = new EventEmitter<string>();
  constructor(private store: Store, private modalService: NgbModal){} 

  confirmDelete(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

  deleteEmployee() {
    this.modalService.dismissAll();
    this.store.dispatch(deleteEmployee({ id: this.employee.id || '' }))
  }

  onEdit(id?: string) {
    this.editEmp.emit(id || '');
  }
}
