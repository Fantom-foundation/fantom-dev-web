import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SampleHomeComponent } from './sample-home.component';
import { generatedRoutes } from './generated.routes';

@NgModule({
  declarations: [HomeComponent, SampleHomeComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(generatedRoutes)
  ]
})
export class GeneratedModule {}
