import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Property } from "../../models/property.model";

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-user-page',
      templateUrl: './user-page.component.html',
      styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
      private userSub: Subscription;
      user = {
            username: "",
            email: "",
            id: null
      };
      properties: Property[] = [];

      constructor(private authService: AuthService, private http: HttpClient) { }

      ngOnInit() {
            this.userSub = this.authService.user.subscribe(user => {
                  if (user) {
                        this.user.username = user.username;
                        this.user.email = user.email;
                        this.user.id = user.id;
                        this.http.get<Property[]>('http://localhost:1337/properties?favoriteBy.id=' + this.user.id).subscribe(
                              properties => {
                                    this.properties = properties;
                              });
                  }
            });
      }

      ngOnDestroy() {
            this.userSub.unsubscribe();
      }

}
