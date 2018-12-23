import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


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
import { generatedRoutes } from './generated.routes';

@NgModule({
  declarations: [ApiComponent, ArchitectureResultsComponent, ArchitectureComponent, CoreComponentsComponent, FrameworkComponent, HomeComponent, InstallingLachesisComponent, LachesisDesignComponent, UsageComponent, ListComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(generatedRoutes)
  ]
})
export class GeneratedModule {}
