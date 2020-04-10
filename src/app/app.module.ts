import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WeCallYouComponent } from './we-call-you/we-call-you.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RecentPropsComponent } from './recent-props/recent-props.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WeCallYouComponent,
    SearchFormComponent,
    RecentPropsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
