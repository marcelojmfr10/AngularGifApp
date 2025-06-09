import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'), // lazy loading
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page.component'), // lazy loading
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page.component'), // lazy loading
      },
      {
        path: 'history/:query', // /:query/:name/:title
        loadComponent: () => import('./gifs/pages/gif-history/gif-history.component'), // lazy loading
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
