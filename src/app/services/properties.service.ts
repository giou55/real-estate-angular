import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Property } from '../models/property.model';

@Injectable({
    providedIn: 'root',
})
export class PropertiesService {
    constructor(private http: HttpClient) {}

    getProperties() {
        return this.http.get<Property[]>(`${environment.baseUrl}/properties`);
    }

    getPropertyById(id: number) {
        return this.http.get<Property>(
            `${environment.baseUrl}/properties/${id}`
        );
    }

    getRecentProperties() {
        return this.http.get<Property[]>(
            `${environment.baseUrl}/properties?recent=true`
        );
    }

    getFeaturedProperties() {
        return this.http.get<Property[]>(
            `${environment.baseUrl}/properties?featured=true`
        );
    }
}
