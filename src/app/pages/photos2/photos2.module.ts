import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Photos2Component } from './photos2/photos2.component';



@NgModule({
  declarations: [Photos2Component],
  exports:[Photos2Component],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class Photos2Module { }
