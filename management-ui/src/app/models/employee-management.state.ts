import { Employee } from "./employee.model";

export interface EmployeeManagementState {
    employees: Employee[];
    filters: Record<string, string>;
}