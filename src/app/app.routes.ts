import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then(m => m.Home)
    }
  },
  {
    path: 'portfolio',
    loadComponent: () => {
      return import('./portfolio/portfolio').then(m => m.Portfolio)
    }
  },
  {
    path: 'project/:id',
    loadComponent: () => {
      return import('./project/project').then(m => m.Project)
    }
  }
];
