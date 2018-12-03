import { Routes } from '@angular/router';
import { WikiComponent } from '../wiki.component';

export const generatedRoutes: Routes = [
  {
    path: 'home',
    data: {
      template: 'Welcome to the fantom-dev-web wiki!\n',
      styles: [
        ':host {color: red}'
      ]
    },
    component: WikiComponent
  },
  {
    path: 'sample-home',
    data: {
      template: 'Welcome to the fantom-dev-web wiki!\n',
      styles: [
        ':host {color: red}'
      ]
    },
    component: WikiComponent
  }
];
