import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Agent } from '../models/agent.model';

@Injectable({
    providedIn: 'root',
})
export class AreasService {
    constructor(private http: HttpClient) {}

    getAreas() {
        return this.http.get<any>(
            `${environment.baseUrl}/areas?_sort=name:ASC`
        );
    }
}
