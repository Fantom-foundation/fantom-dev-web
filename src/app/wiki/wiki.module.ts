import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GitService } from '../git/git.service';
import { WikiComponent } from './wiki.component';
import { wikiRoutes } from './wiki.routes';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [WikiComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(wikiRoutes),
    MatButtonModule
    // GitModule.forRoot()
  ],
  providers: [GitService]
})
export class WikiModule {}
