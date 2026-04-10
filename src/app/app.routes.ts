import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.routing').then((m) => m.MAIN_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
