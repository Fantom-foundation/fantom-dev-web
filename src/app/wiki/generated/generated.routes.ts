import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SampleHomeComponent } from './sample-home.component';
import { ListComponent } from './list.component';

export const generatedRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sample-home',
    component: SampleHomeComponent
  },
  {
    path: '',
    component: ListComponent
  }
];
