import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { TestComponent } from './components/test/test.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'properties/:id', component: PropertyComponent },
        { path: 'submit', component: SubmitComponent },
        { path: 'test', component: TestComponent },
        { path: 'searchResults', component: SearchResultsComponent }
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
