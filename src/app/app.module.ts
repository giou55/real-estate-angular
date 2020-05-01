import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WeCallYouComponent,
    SearchFormComponent,
    RecentPropsComponent,
    DialogFormComponent,
    PropertyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
