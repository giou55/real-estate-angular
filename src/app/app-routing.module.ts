import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'property/:id', component: PropertyComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
