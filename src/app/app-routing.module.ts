import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { TestComponent } from './components/test/test.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { RouteGuardService } from './services/routeGuard.service';


const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'properties/:id', component: PropertyComponent },
      { path: 'submit', component: SubmitComponent },
      { path: 'test', component: TestComponent },
      { path: 'searchResults', component: SearchResultsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      {
            path: 'user', component: UserPageComponent,
            canActivate: [RouteGuardService]
      }
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
