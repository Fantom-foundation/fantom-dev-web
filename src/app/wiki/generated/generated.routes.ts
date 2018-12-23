import { Routes } from '@angular/router';

import { ApiComponent } from './api.component';
import { ArchitectureResultsComponent } from './architecture-results.component';
import { ArchitectureComponent } from './architecture.component';
import { CoreComponentsComponent } from './core-components.component';
import { FrameworkComponent } from './framework.component';
import { HomeComponent } from './home.component';
import { InstallingLachesisComponent } from './installing-lachesis.component';
import { LachesisDesignComponent } from './lachesis-design.component';
import { UsageComponent } from './usage.component';
import { ListComponent } from './list.component';

export const generatedRoutes: Routes = [
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'architecture-results',
    component: ArchitectureResultsComponent
  },
  {
    path: 'architecture',
    component: ArchitectureComponent
  },
  {
    path: 'core-components',
    component: CoreComponentsComponent
  },
  {
    path: 'framework',
    component: FrameworkComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'installing-lachesis',
    component: InstallingLachesisComponent
  },
  {
    path: 'lachesis-design',
    component: LachesisDesignComponent
  },
  {
    path: 'usage',
    component: UsageComponent
  },
  {
    path: '',
    component: ListComponent
  }
];
