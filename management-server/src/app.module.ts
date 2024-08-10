import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { dataBaseConfig } from './db-config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    EmployeeModule,
    SequelizeModule.forRoot(dataBaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
