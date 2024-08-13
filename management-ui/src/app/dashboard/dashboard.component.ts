import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavsComponent } from '../core/side-navs/side-navs.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HeaderComponent } from '../core/header/header.component';
import { select, Store } from '@ngrx/store';
import { setEmployees } from '../store/employee.actions';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    SideNavsComponent,
    EmployeesComponent,
    HeaderComponent,
    AddEmployeeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  showAddEmployee = true;
  constructor(private store: Store){}
  
  ngOnInit(): void {
      this.store.dispatch(setEmployees());
  }

  onAddEmployee() {
    this.showAddEmployee = true;
  }
}
