import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'explore',
    loadComponent: () => import('./pages/explore/explore.component').then((m) => m.ExploreComponent),
  },
  {
    path: 'watchlist',
    loadComponent: () => import('./pages/watchlist/watchlist.component').then((m) => m.WatchlistComponent),
  },
  {
    path: 'collection',
    loadComponent: () => import('./pages/collection/collection.component').then((m) => m.CollectionComponent),
  },
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full',
  },
];
