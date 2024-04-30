import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './pages/photos/photos/photos.component';
import { PhotosModule } from './pages/photos/photos.module';
import { Photos2Component } from './pages/photos2/photos2/photos2.component';
import { Photos2Module } from './pages/photos2/photos2.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    Photos2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
