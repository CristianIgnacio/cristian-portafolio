import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./portfolio/portfolio-page').then((m) => m.PortfolioPage),
    title: 'Cristian Fuentes | Portafolio',
  },
  { path: '**', redirectTo: '' },
];
