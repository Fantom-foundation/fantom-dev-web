import { Routes } from '@angular/router';

import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GuideComponent } from './guide.component';

export const guideRoutes: Routes = [
  { path: '', component: GuideComponent },
  { path: 'getting-started', component: GettingStartedComponent }
];
