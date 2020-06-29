import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'property/:id', component: PropertyComponent },
        { path: 'submit', component: SubmitComponent },
        { path: 'test', component: TestComponent }
];

@NgModule({
        imports: [
                RouterModule.forRoot(routes, {
                        scrollPositionRestoration: "top"
                })
        ],
        exports: [RouterModule]
})
export class AppRoutingModule { }
