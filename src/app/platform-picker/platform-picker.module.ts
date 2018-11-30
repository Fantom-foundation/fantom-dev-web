import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformPickerComponent } from './platform-picker.component';
import { MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlatformPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatOptionModule, MatFormFieldModule, MatSelectModule
  ],
  exports: [PlatformPickerComponent]
})
export class PlatformPickerModule { }
