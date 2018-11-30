import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule, RouterModule,
    MatButtonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
