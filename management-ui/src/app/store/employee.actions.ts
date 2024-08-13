import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const ActionTypes = {
    setEmployeeType: '[Employee Page] set employees',
    updateEmployeeType: '[Employee Page] update employees data',
    addEmployee: '[Employee Page] add employee',
    deleteEmployee: '[Employee Page] delete employee',
    updateEmployee: '[Employee Page] update employee',
    updateFilters: '[Dashboard Page] update filters',
};

export const setEmployees = createAction(
  ActionTypes.setEmployeeType
);

export const addEmployee = createAction(
    ActionTypes.addEmployee,
    props<{ employee: Employee }>()
);

export const updateSingleEmployee = createAction(
    ActionTypes.updateEmployee,
    props<{ id: string, employee: Employee }>()
);

export const deleteEmployee = createAction(
    ActionTypes.deleteEmployee,
    props<{ id: string }>()
);
  
export const updateEmployees = createAction(
    ActionTypes.updateEmployeeType,
    props<{ employees: Employee[] }>()
);

export const updateFilters = createAction(
    ActionTypes.updateFilters,
    props<{ filters: Record<string, string> }>()
);