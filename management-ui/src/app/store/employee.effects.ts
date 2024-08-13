import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap, tap } from "rxjs"
import { EmployeeService } from "../service/employee.service"
import { ActionTypes, setEmployees } from "./employee.actions"
import { testData } from "./mock-data"

const employees = testData;

@Injectable()
export class EmployeeEffect{
  
  constructor(private actions$: Actions, private employeeService: EmployeeService){}

    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.setEmployeeType),
            switchMap(() => this.employeeService.getAllEmployees().pipe(
                map((emps) => ({type: ActionTypes.updateEmployeeType, employees: emps}))
            ))
        )
    );

    addEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.addEmployee),
            switchMap((actions: any) => this.employeeService.addEmployee(actions.employee).pipe(
                map(() => ({ type: ActionTypes.setEmployeeType }))
            ))
        )
    );

    updateEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.updateEmployee),
            switchMap((actions: any) => this.employeeService.updateEmployee(actions.id, actions.employee).pipe(
                map(() => ({ type: ActionTypes.setEmployeeType }))
            ))
        )
    );

    deleteEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.deleteEmployee),
            switchMap((actions: any) => this.employeeService.deleteEmployee(actions.id).pipe(
                map(() => ({ type: ActionTypes.setEmployeeType }))
            ))
        )
    );
}