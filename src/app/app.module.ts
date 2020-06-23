import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WeCallYouComponent } from './components/we-call-you/we-call-you.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RecentPropsComponent } from './components/recent-props/recent-props.component';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { PropertyComponent } from './components/property/property.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedPropsComponent } from './components/featured-props/featured-props.component';
import { AgentsComponent } from './components/agents/agents.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormNewComponent } from './components/search-form-new/search-form-new.component';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        WeCallYouComponent,
        SearchFormComponent,
        RecentPropsComponent,
        DialogFormComponent,
        PropertyComponent,
        HomeComponent,
        SubmitComponent,
        FooterComponent,
        FeaturedPropsComponent,
        AgentsComponent,
        NavbarComponent,
        SearchFormNewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatTabsModule,
        MatButtonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDVSnm1iQ3D-FF6_0yNxqyMRA63XVmBckM',
            language: 'en'
        }),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
