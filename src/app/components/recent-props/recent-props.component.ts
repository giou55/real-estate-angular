import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { Property } from "../../models/property.model";

@Component({
      selector: 'app-recent-props',
      templateUrl: './recent-props.component.html',
      styleUrls: ['./recent-props.component.scss']
})
export class RecentPropsComponent implements OnInit, OnDestroy {
      error = null;
      recentProperties: Property[] = [];
      isAuthenticated = false;
      private userSub: Subscription;
      userEmail: string;

      constructor(
            private http: HttpClient,
            private authService: AuthService,
            private router: Router
      ) { }



      ngOnInit(): void {
            this.userSub = this.authService.user.subscribe(user => {
                  this.isAuthenticated = !!user;
                  if (user) {
                        this.userEmail = user.email;
                  }
            });
            this.http.get<Property[]>('http://localhost:1337/properties').subscribe(
                  properties => {
                        this.recentProperties = properties;
                  });
      }

      addToFavorites(propID) {
            if (this.isAuthenticated) {
                  console.log("property ID:" + propID);
                  this.http.get<Property[]>('http://localhost:1337/properties').subscribe(
                        properties => {
                              this.recentProperties = properties;
                        });
            } else {
                  this.router.navigate(['login']);
            }
      }

      ngOnDestroy() {
            this.userSub.unsubscribe();
      }

}
