import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/buttons',
        pathMatch: 'full'
    },
    {
        path: 'buttons',
        loadComponent: () => import('./presentation/pages/buttons/buttons')
    }
];
