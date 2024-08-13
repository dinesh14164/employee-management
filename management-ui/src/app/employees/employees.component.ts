import { Component, OnInit } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { select, Store } from '@ngrx/store';
import { selectEmployes } from '../store/employee.selectors';
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
  employees: Employee[] | undefined;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.pipe(
      select(selectEmployes)
    ).subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }
}
