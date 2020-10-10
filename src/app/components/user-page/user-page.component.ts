import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

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
    properties: any;
    isLoading = false;
    private favSub: Subscription;
    isConfirming = false;
    property_id: number;
    propertyClickEvent;
    propertiesNumber: number = 0;

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
                    .get<any>(
                        'http://localhost:1337/properties?favoriteBy.id=' +
                            this.user.id
                    )
                    .subscribe((properties) => {
                        this.isLoading = false;
                        this.properties = properties;
                        this.propertiesNumber = properties.length;
                    });
            }
        });
    }

    confirmToRemove(propID, event) {
        this.isConfirming = true;
        this.property_id = propID;
        this.propertyClickEvent = event;
    }

    removeFavorite() {
        this.isConfirming = false;
        this.favoriteHomeService
            .removeFromFavorites(this.property_id, this.user)
            .subscribe(() => {
                this.propertyClickEvent.srcElement.parentElement.parentElement.parentElement.style.display =
                    'none';
                this.propertiesNumber = this.propertiesNumber - 1;
            });
    }

    cancelRemoving() {
        this.isConfirming = false;
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
