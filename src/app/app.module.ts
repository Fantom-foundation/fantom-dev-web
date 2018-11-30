import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlatformPickerService } from './platform-picker/platform-picker.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FooterModule
  ],
  providers: [PlatformPickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
