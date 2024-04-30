import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PhotosComponent],
  exports:[PhotosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PhotosModule { }
