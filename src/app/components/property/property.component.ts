import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FavoriteHomeService } from '../../services/favoriteHome.service';

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
            .get<Property>('http://localhost:1337/properties/' + this.id)
            .subscribe((property) => {
                this.property = property;
            });
    }
}
