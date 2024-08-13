import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavsComponent } from '../core/side-navs/side-navs.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HeaderComponent } from '../core/header/header.component';
import { select, Store } from '@ngrx/store';
import { setEmployees } from '../store/employee.actions';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from '../models/employee.model';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    SideNavsComponent,
    EmployeesComponent,
    HeaderComponent,
    AddEmployeeComponent,
    SearchFiltersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  showAddEmployee = false;
  editEmployee: Employee | undefined;
  edit = false;
  showSearchFilters = false;
  constructor(private store: Store){}
  
  ngOnInit(): void {
      this.store.dispatch(setEmployees());
  }

  onAddEmployee() {
    this.showAddEmployee = true;
    this.edit = false;
  }

  hideAddEmployee() {
    this.showAddEmployee = false;
    this.edit = false;
  }
  onEditEmployee(employee: Employee) {
    this.editEmployee = employee;
    this.edit = true;
    this.showAddEmployee = true;
  }

  onSelectNav(option: string) {
    this.showSearchFilters = option === 'Search';
  }
}
