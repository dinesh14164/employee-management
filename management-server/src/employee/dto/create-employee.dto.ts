import { IsString, IsEmail, IsDateString, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly avatarUrl: string;

  @IsString()
  readonly companyName: string;

  @IsString()
  readonly designation: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly contactNo: string;

  @IsString()
  readonly experience: string;

  @IsDateString()
  readonly joiningDate: string;

  @IsString()
  readonly team: string;

  @IsOptional()
  @IsString()
  readonly manager?: string;
}

