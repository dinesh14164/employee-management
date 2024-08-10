import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectModel(Employee)
    private employeeRepo: typeof Employee
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepo.create(createEmployeeDto as any);
  }

  findAll() {
    return this.employeeRepo.findAll();
  }

  async findOne(id: number) {
    const employee = await this.employeeRepo.findByPk(id);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    console.log('id==================', id);
    console.log('dto', updateEmployeeDto);
    const [affectedCount, updatedEmployee] = await this.employeeRepo.update(updateEmployeeDto, {
      where: { id },
      returning: true, // Ensure that the updated row is returned
    });

    console.log('updatedEmployee', updatedEmployee);
    if (affectedCount === 0) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    return updatedEmployee;
  }

  async remove(id: number) {
    const affectedCount = await this.employeeRepo.destroy({
      where: { id },
    });

    if (affectedCount === 0) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
  }
}
