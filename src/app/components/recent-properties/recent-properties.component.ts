import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { PropertiesService } from '../../services/properties.service';
import { FavoriteHomeService } from '../../services/favoriteHome.service';
import { environment } from '../../../environments/environment';

import { Property } from '../../models/property.model';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-recent-properties',
    templateUrl: './recent-properties.component.html',
    styleUrls: ['./recent-properties.component.scss'],
})
export class RecentPropertiesComponent implements OnInit, OnDestroy {
    error = null;
    properties: Property[] = [];
    isAuthenticated = false;
    isLoading = false;
    private userSub: Subscription;
    private favSub: Subscription;
    user: User = null;
    base_url = environment.baseUrl;

    constructor(
        private authService: AuthService,
        private favoriteHomeService: FavoriteHomeService,
        private propertiesService: PropertiesService
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
            if (user) {
                this.user = user;
            }
        });
        this.propertiesService.getRecentProperties().subscribe((properties) => {
            this.isLoading = false;
            this.properties = properties;
        });
    }

    toggleFavorite(prop: any, event: any) {
        event.srcElement.parentElement.nextSibling.style.display =
            'inline-block';
        if (event.srcElement.classList.contains('white-heart')) {
            this.favSub = this.favoriteHomeService
                .addToFavorites(prop.id, this.user)
                .subscribe(() => {
                    event.srcElement.parentElement.nextSibling.style.display =
                        'none';
                    event.srcElement.classList.remove('white-heart');
                    event.srcElement.classList.add('red-heart');
                });
        } else {
            this.favSub = this.favoriteHomeService
                .removeFromFavorites(prop.id, this.user)
                .subscribe(() => {
                    event.srcElement.parentElement.nextSibling.style.display =
                        'none';
                    event.srcElement.classList.remove('red-heart');
                    event.srcElement.classList.add('white-heart');
                });
        }
    }

    isFavorite(prop: any): boolean {
        if (this.user) {
            return prop.favoriteBy.some((p) => p.id == this.user.id);
        }
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
        if (this.favSub) {
            this.favSub.unsubscribe();
        }
    }
}
