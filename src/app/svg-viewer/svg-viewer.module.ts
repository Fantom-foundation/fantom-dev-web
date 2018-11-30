import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SvgViewerComponent } from './svg-viewer.component';


@NgModule({
  declarations: [SvgViewerComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [SvgViewerComponent]
})
export class SvgViewerModule { }
