import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Employee } from '../models/employee.model';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


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
}
