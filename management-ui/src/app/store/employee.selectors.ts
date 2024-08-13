import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeManagementState } from '../models/employee-management.state';

export const selectFeature = createFeatureSelector<EmployeeManagementState>('employee');

export const selectEmployes = createSelector(
  selectFeature,
  (state: EmployeeManagementState) => state.employees
);