import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Property } from '../../models/property.model';
import { User } from '../../models/user.model';

import { AuthService } from '../../services/auth.service';
import { FavoriteHomeService } from '../../services/favoriteHome.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit, OnDestroy {
    private userSub: Subscription;
    user: User = null;
    properties: Property[] = [];
    isLoading = false;
    private favSub: Subscription;
    isConfirming = false;

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private favoriteHomeService: FavoriteHomeService
    ) {}

    ngOnInit() {
        this.isLoading = true;
        this.userSub = this.authService.user.subscribe((user) => {
            if (user) {
                this.user = user;
                this.http
                    .get<Property[]>(
                        'http://localhost:1337/properties?favoriteBy.id=' +
                            this.user.id
                    )
                    .subscribe((properties) => {
                        this.isLoading = false;
                        this.properties = properties;
                    });
            }
        });
    }

    confirm() {
        this.isConfirming = true;
    }

    // removeFavorite(propID) {
    //     this.favoriteHomeService
    //         .removeFromFavorites(propID, this.user)
    //         .subscribe();
    // }

    removeFavorite() {
        this.isConfirming = false;
    }

    cancel(e: Event) {
        this.isConfirming = false;
        console.log(e);
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
