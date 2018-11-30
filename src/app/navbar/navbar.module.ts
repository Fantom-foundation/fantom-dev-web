import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { PlatformPickerModule } from '../platform-picker/platform-picker.module';
import { SvgViewerModule } from '../svg-viewer/svg-viewer.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule, RouterModule,
    MatButtonModule,
    SvgViewerModule, PlatformPickerModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
