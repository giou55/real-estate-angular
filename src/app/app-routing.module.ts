import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { PropertyComponent } from './components/property/property.component';
import { AgentComponent } from './components/agent/agent.component';
import { AgentSearchFormComponent } from './components/agent-search-form/agent-search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AgentResultsComponent } from './components/agent-results/agent-results.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { RouteGuardService } from './services/routeGuard.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'sell', component: SellComponent },
    { path: 'agent/search', component: AgentSearchFormComponent },
    { path: 'properties/:id', component: PropertyComponent },
    { path: 'agents/:id', component: AgentComponent },
    { path: 'search/results', component: SearchResultsComponent },
    { path: 'agent/results', component: AgentResultsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'user',
        component: UserPageComponent,
        canActivate: [RouteGuardService],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
