import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EmployeeCardComponent,
    DashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'management-ui';
}
