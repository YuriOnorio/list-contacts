import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'patinhomaloka',
    loadComponent: () => import('./patinhomaloka/patinhomaloka.page').then( m => m.PatinhomalokaPage)
  },
  {
    path: 'pernalonga',
    loadComponent: () => import('./pernalonga/pernalonga.page').then( m => m.PernalongaPage)
  },
  {
    path: 'bart',
    loadComponent: () => import('./bart/bart.page').then( m => m.BartPage)
  },
  {
    path: 'picapau',
    loadComponent: () => import('./picapau/picapau.page').then( m => m.PicapauPage)
  },
  {
    path: 'scooby',
    loadComponent: () => import('./scooby/scooby.page').then( m => m.ScoobyPage)
  },
];
