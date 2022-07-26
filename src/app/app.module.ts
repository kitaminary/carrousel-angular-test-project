import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagesComponent } from './components/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    CarrouselComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
