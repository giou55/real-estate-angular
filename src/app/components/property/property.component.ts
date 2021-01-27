import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Gallery,
    GalleryItem,
    ImageItem,
    ThumbnailsPosition,
    ImageSize,
} from 'ng-gallery';

import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FavoriteHomeService } from '../../services/favoriteHome.service';
import { PropertiesService } from '../../services/properties.service';
import { environment } from '../../../environments/environment';

import { Property } from '../../models/property.model';
import { User } from '../../models/user.model';

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
    base_url = environment.baseUrl;

    items: GalleryItem[];

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private favoriteHomeService: FavoriteHomeService,
        private propertiesService: PropertiesService,
        public gallery: Gallery
    ) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
            if (user) {
                this.user = user;
            }
        });

        this.id = this.route.snapshot.params['id'];
        this.propertiesService
            .getPropertyById(+this.id)
            .subscribe((property) => {
                this.property = property;
                this.items = this.property.gallery_images_url.images.map(
                    (url) =>
                        new ImageItem({
                            src: url,
                            thumb: url,
                        })
                );
                this.items.unshift(
                    new ImageItem({
                        src: this.property.image_large_url,
                        thumb: this.property.image_large_url,
                    })
                );
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
