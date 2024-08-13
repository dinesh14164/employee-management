import { Component, EventEmitter, Output } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { Navigation } from '../../models/employee.model';

@Component({
  selector: 'app-side-navs',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './side-navs.component.html',
  styleUrl: './side-navs.component.scss'
})
export class SideNavsComponent {
  topNavigations: Navigation[] = [
    {
      name: 'Overview',
      icon: 'view_agenda',
    },
    {
      name: 'Messages',
      icon: 'email',
    },
    {
      name: 'Search',
      icon: 'search',
    },
    {
      name: 'Filter',
      icon: 'filter',
    },
    {
      name: 'History',
      icon: 'history',
    },
    {
      name: 'My Account',
      icon: 'person',
    }
  ];
  bottomNavigations: Navigation[] = [
    {
      name: 'Get Help',
      icon: 'chat',
    },
    {
      name: 'Sign Out',
      icon: 'logout',
    }
  ];

  selectedNavItem: Navigation = this.topNavigations[0];
  @Output() selectedSideNav = new EventEmitter<string>();

  onNavItemClick(item: Navigation) {
    this.selectedNavItem = item;
    this.selectedSideNav.emit(item.name);
  }
}
