import { createReducer, on } from '@ngrx/store';
import { EmployeeManagementState } from '../models/employee-management.state';
import { setEmployees, updateEmployees } from './employee.actions';

export const initialState: EmployeeManagementState = {
    employees: [],
    filters: []
};

export const employeeReducer = createReducer(
  initialState,
  on(updateEmployees, (state, actions) => {
    return {
        ...state,
        employees: actions.employees,
    }
  })
);