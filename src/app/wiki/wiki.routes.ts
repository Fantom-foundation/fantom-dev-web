import { Routes } from '@angular/router';

import { WikiComponent } from './wiki.component';

export const wikiRoutes: Routes = [
  { path: '', component: WikiComponent, data: { template: 'hello' } },
  { path: 'foo', component: WikiComponent, data: { template: 'foo', styles: [':host {color: red}'] } },
  { path: 'bar', component: WikiComponent, data: { template: 'bar', styles: [':host {color: blue}'] } },
  { path: 'can', component: WikiComponent, data: { template: 'can', styles: [':host {color: green}'] } }
];
