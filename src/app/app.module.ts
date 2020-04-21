import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WeCallYouComponent } from './we-call-you/we-call-you.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RecentPropsComponent } from './recent-props/recent-props.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WeCallYouComponent,
    SearchFormComponent,
    RecentPropsComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
