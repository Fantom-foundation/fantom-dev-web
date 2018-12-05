import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { WikiComponent } from './wiki.component';
import { wikiRoutes } from './wiki.routes';
import { GeneratedModule } from './generated/generated.module';

@NgModule({
  declarations: [WikiComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(wikiRoutes), GeneratedModule,
    MatButtonModule
  ],
  providers: []
})
export class WikiModule {}
