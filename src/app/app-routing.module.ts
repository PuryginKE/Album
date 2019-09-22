import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoComponent } from './components/photo/photo.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'photo/:id', component: PhotoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
