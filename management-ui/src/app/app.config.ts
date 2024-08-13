import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { employeeReducer } from './store/employee.reducer';
import { EmployeeEffect } from './store/employee.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(),
    provideEffects([EmployeeEffect]),
    provideState({ name: 'employee', reducer: employeeReducer }),
    provideHttpClient(),

  ]
};
