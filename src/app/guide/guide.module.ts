import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GuideComponent } from './guide.component';
import { guideRoutes } from './guide.routes';

@NgModule({
  declarations: [GuideComponent, GettingStartedComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(guideRoutes),
    MatIconModule, MatButtonModule, MatTooltipModule,
    // DocViewerModule
  ]
})
export class GuideModule {}
