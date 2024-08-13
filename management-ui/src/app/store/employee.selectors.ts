import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeManagementState } from '../models/employee-management.state';

export const selectFeature = createFeatureSelector<EmployeeManagementState>('employee');

export const selectEmployes = createSelector(
  selectFeature,
  (state: EmployeeManagementState) => state.employees
);

export const filteredEmployes = createSelector(
    selectFeature,
    (state: EmployeeManagementState) => state.employees.filter((emp) => {
        return (!state.filters['team'] || emp.team === state.filters['team']) &&
            (!state.filters['designation'] || emp.designation === state.filters['designation']) &&
            (!state.filters['joiningDates'] || emp.joiningDate === state.filters['joiningDates'])
    })
  );