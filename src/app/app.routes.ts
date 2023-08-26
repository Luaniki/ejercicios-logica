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
    path: 'fibonacci',
    loadComponent: () => import('./fibonacci/fibonacci.page').then( m => m.FibonacciPage)
  },
  {
    path: 'primos',
    loadComponent: () => import('./primos/primos.page').then( m => m.PrimosPage)
  },
  {
    path: 'factorial',
    loadComponent: () => import('./factorial/factorial.page').then( m => m.FactorialPage)
  },
  {
    path: 'im-pares',
    loadComponent: () => import('./im-pares/im-pares.page').then( m => m.ImParesPage)
  },
  {
    path: 'conjuntos',
    loadComponent: () => import('./conjuntos/conjuntos.page').then( m => m.ConjuntosPage)
  },
];
