import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos/photos.component';
import { Photos2Component } from './pages/photos2/photos2/photos2.component';

const routes: Routes = [
  {
    path:"photos",
    component:PhotosComponent
  },
  {
    path:'photos2',
    component:Photos2Component
  },
  {
    path:'**',
    component:Photos2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
