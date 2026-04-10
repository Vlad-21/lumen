import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import {appRoutes} from '@core/constants';

const children: Routes = [
  {
    path: appRoutes.library,
    loadComponent: () =>
      import('@main/pages/library/library.component').then((m) => m.LibraryComponent),
  },
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full',
  },
];


export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children,
  }
]
