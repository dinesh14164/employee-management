import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgbDropdownModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() addEmployee = new EventEmitter<boolean>();
  teams: string[] = [
    'Product Team',
    'IDC',
    'OCBC',
    'Radian',
    'Rustify'
  ];

  selectedTeam: string | undefined;

  onSelectTeam(team: string) {
    this.selectedTeam = team;
  }

  onAddEmployee() {
    this.addEmployee.emit(true);
  }
}
