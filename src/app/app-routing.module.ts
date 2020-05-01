import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'property/:id', component: PropertyComponent },
  { path: 'submit', component: SubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
