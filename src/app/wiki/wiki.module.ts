import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { WikiComponent } from './wiki.component';
import { wikiRoutes } from './wiki.routes';

@NgModule({
  declarations: [WikiComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(wikiRoutes),
    MatButtonModule
  ],
  providers: []
})
export class WikiModule {}
