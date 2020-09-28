import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FavoriteHomeService } from '../../services/favoriteHome.service';

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
      private favSub: Subscription;
      user: User = null;

      constructor(
            private http: HttpClient,
            private authService: AuthService,
            private favoriteHomeService: FavoriteHomeService
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

      toggleFavorite(prop: any, event: any) {
            if (event.srcElement.parentElement.classList.contains("white-heart")) {
                  this.favSub = this.favoriteHomeService.addToFavorites(prop.id, this.user)
                        .subscribe(
                              () => {
                                    event.srcElement.parentElement.classList.remove("white-heart");
                                    event.srcElement.parentElement.classList.add("red-heart");
                              }
                        );
            } else {
                  this.favSub = this.favoriteHomeService.removeFromFavorites(prop.id, this.user)
                        .subscribe(
                              () => {
                                    event.srcElement.parentElement.classList.remove("red-heart");
                                    event.srcElement.parentElement.classList.add("white-heart");
                              }
                        );
            }
      }

      isFavorite(prop: any): boolean {
            if (this.user) {
                  return prop.favoriteBy.some(p => p.id == this.user.id)
            }
      }

      ngOnDestroy() {
            this.userSub.unsubscribe();
      }

}
