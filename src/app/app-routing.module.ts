import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'property/:id', component: PropertyComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
