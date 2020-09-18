import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { Property } from "../../models/property.model";
import { User } from '../../models/user.model';

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
      user: User = null;

      constructor(
            private http: HttpClient,
            private authService: AuthService,
            private router: Router
      ) { }



      ngOnInit(): void {
            this.userSub = this.authService.user.subscribe(user => {
                  this.isAuthenticated = !!user;
                  if (user) {
                        this.user = user;
                  }
            });
            this.http.get<Property[]>('http://localhost:1337/properties').subscribe(
                  properties => {
                        this.recentProperties = properties;
                  });
      }

      addToFavorites(propID) {
            // this.http
            // .put<any>(
            //       'http://localhost:1337/properties/' + propID,
            //       {
            //             "favoriteBy": [
            //                   {
            //                         "id": this.user.id,
            //                         "username": this.user.username,
            //                         "email": this.user.email,
            //                         "provider": "local",
            //                         "confirmed": true,
            //                         "blocked": false,
            //                         "role": 1,
            //                         "created_by": 1,
            //                         "updated_by": 1,
            //                         "created_at": "2020-09-16T11:18:28.000Z",
            //                         "updated_at": "2020-09-18T11:17:21.000Z"
            //                   }
            //             ]
            //       }
            // );

            if (this.isAuthenticated) {
                  console.log("property ID:" + propID);
                  console.log("user ID:" + this.user.id);
                  console.log("user ID:" + this.user.username);
                  console.log("user Email:" + this.user.email);
            } else {
                  console.log("You are not authenticated");
                  this.router.navigate(['login']);
            }
      }

      ngOnDestroy() {
            this.userSub.unsubscribe();
      }

}
