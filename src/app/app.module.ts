import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WeCallYouComponent } from './components/we-call-you/we-call-you.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedPropsComponent } from './components/featured-props/featured-props.component';
import { AgentsComponent } from './components/agents/agents.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchFormNewComponent } from './components/search-form-new/search-form-new.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SmallLoadingSpinnerComponent } from './shared/small-loading-spinner/small-loading-spinner.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AgentComponent } from './components/agent/agent.component';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        WeCallYouComponent,
        PropertiesComponent,
        PropertyComponent,
        HomeComponent,
        SubmitComponent,
        FooterComponent,
        FeaturedPropsComponent,
        AgentsComponent,
        NavbarComponent,
        TestComponent,
        SearchResultsComponent,
        SearchFormNewComponent,
        SignupComponent,
        LoginComponent,
        LoadingSpinnerComponent,
        SmallLoadingSpinnerComponent,
        UserPageComponent,
        AgentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDVSnm1iQ3D-FF6_0yNxqyMRA63XVmBckM',
            language: 'en',
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
