import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get('http://localhost:3000/employee');
  }

  addEmployee(employee: Employee) {
    return this.http.post('http://localhost:3000/employee', employee);
  }

  updateEmployee(id: string, employee: Employee) {
    return this.http.patch('http://localhost:3000/employee/' + id, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete('http://localhost:3000/employee/'+ id);
  }
}
