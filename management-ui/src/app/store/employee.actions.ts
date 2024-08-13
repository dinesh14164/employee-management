import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const ActionTypes = {
    setEmployeeType: '[Employee Page] set employees',
    updateEmployeeType: '[Employee Page] update employees',
};

export const setEmployees = createAction(
  ActionTypes.setEmployeeType
);

export const updateEmployees = createAction(
    ActionTypes.updateEmployeeType,
    props<{ employees: Employee[] }>()
);