import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';


import { WikiComponent } from './wiki.component';
import { wikiRoutes } from './wiki.routes';
import { generatedRoutes } from './generated/generate_routes';


/*
const declarations = wikiRoutes
  .map(r => Object.assign(r.component, {__prop__metadata__: (WikiComponent as any).__prop__metadata__}))
  .filter(r => r.name !== 'WikiComponent');
console.info('declarations:', [WikiComponent, ...declarations], ';');
*/


@NgModule({
  declarations: [WikiComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(wikiRoutes), RouterModule.forChild(generatedRoutes),
    MatButtonModule
  ],
  providers: []
})
export class WikiModule {}
