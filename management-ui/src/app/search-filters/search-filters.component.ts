import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { selectEmployes } from '../store/employee.selectors';
import { Employee } from '../models/employee.model';
import { updateFilters } from '../store/employee.actions';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [
    NgbDropdownModule,
    MatIconModule
  ],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss'
})
export class SearchFiltersComponent implements OnInit {
  selectedTeam: string | undefined;
  teams: string[] = [];

  selectedDesignation: string | undefined;
  designations: string[] = [];

  selectedJoiningDate: string | undefined;
  joiningDates: string[] = [];

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.pipe(
      select(selectEmployes)
    ).subscribe((employees: Employee[]) => {
      employees.forEach(emp => {
        if(!this.teams.includes(emp.team)) {
          this.teams.push(emp.team);
        }
        if(!this.designations.includes(emp.designation)) {
          this.designations.push(emp.designation);
        }
        if(!this.joiningDates.includes(emp.joiningDate)) {
          this.joiningDates.push(emp.joiningDate);
        }
      });
    });
  }

  onSelectDepartment(item: string) {
    this.selectedTeam = item;
  }

  onSelectDesignation(item: string) {
    this.selectedDesignation = item;
  }

  onSelectJoiningYear(item: string) {
    this.selectedJoiningDate = item;
  }

  onApplyFilters() {
    const filters = {
      team: this.selectedTeam || '',
      designation: this.selectedDesignation || '',
      joiningDates: this.selectedJoiningDate || '', 
    }
    this.store.dispatch(updateFilters({ filters}))
  }

  onResetFilters() {
    this.selectedTeam = '';
    this.selectedDesignation = '';
    this.selectedJoiningDate = '';
    this.store.dispatch(updateFilters({ filters: {}}))
  }
}
