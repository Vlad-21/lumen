import { Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'library',
        pathMatch: 'full',
      },
      {
        path: 'library',
        loadComponent: () =>
          import('../library/library.component').then((m) => m.LibraryComponent),
      },
    ],
  },
];
