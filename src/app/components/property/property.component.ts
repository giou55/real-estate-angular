import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FavoriteHomeService } from '../../services/favoriteHome.service';

import { Property } from '../../models/property.model';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss'],
    providers: [],
})
export class PropertyComponent implements OnInit {
    property: Property;
    id: String;
    isAuthenticated = false;
    private userSub: Subscription;
    private favSub: Subscription;
    user: User = null;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private authService: AuthService,
        private favoriteHomeService: FavoriteHomeService
    ) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
            if (user) {
                this.user = user;
            }
        });
        this.id = this.route.snapshot.params['id'];
        this.http
            .get<Property>(`${environment.baseUrl}/properties/${this.id}`)
            .subscribe((property) => {
                this.property = property;
            });
    }

    toggleFavorite(prop: any, event: any) {
        event.srcElement.previousSibling.style.display = 'inline-block';
        if (event.srcElement.parentElement.classList.contains('white-heart')) {
            this.favSub = this.favoriteHomeService
                .addToFavorites(prop.id, this.user)
                .subscribe(() => {
                    event.srcElement.previousSibling.style.display = 'none';
                    event.srcElement.parentElement.classList.remove(
                        'white-heart'
                    );
                    event.srcElement.parentElement.classList.add('red-heart');
                });
        } else {
            this.favSub = this.favoriteHomeService
                .removeFromFavorites(prop.id, this.user)
                .subscribe(() => {
                    event.srcElement.previousSibling.style.display = 'none';
                    event.srcElement.parentElement.classList.remove(
                        'red-heart'
                    );
                    event.srcElement.parentElement.classList.add('white-heart');
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
