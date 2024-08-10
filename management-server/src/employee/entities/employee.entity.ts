import { Column, Table, Model } from 'sequelize-typescript';

@Table({
    tableName: 'employee'
})
export class Employee extends Model {
    
    @Column
    firstName: string;
  
    @Column
    lastName: string;

    @Column
    readonly avatarUrl: string;
  
    @Column
    companyName: string;

    @Column
    email: string;

    @Column
    contactNo: string;

    @Column
    experience: string;

    @Column
    joiningDate: string;

    @Column
    team: string;

    @Column
    manager: string;
}
