import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { select, Store } from '@ngrx/store';
import { filteredEmployes, selectEmployes } from '../store/employee.selectors';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    EmployeeCardComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  @Output() onEmpEdit = new EventEmitter<Employee>();
  employees: Employee[] | undefined;
  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.pipe(
      select(filteredEmployes)
    ).subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }

  editEmp(id: string) {
    const employee = this.employees?.find((emp) => emp.id === id);
    if (employee) {
      this.onEmpEdit.emit(employee);
    }
  }
}
