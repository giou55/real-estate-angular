import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoriteHomeService {
    constructor(private http: HttpClient) {}

    addToFavorites(propID: number, user: User) {
        return this.http
            .get<any>(`${environment.baseUrl}/properties/${propID}`)
            .pipe(
                switchMap((resData) =>
                    this.http.put<any>(
                        `${environment.baseUrl}/properties/${propID}`,
                        {
                            favoriteBy: [
                                ...resData.favoriteBy,
                                {
                                    id: user.id,
                                    username: user.username,
                                    email: user.email,
                                    provider: 'local',
                                    confirmed: true,
                                    blocked: false,
                                    role: 1,
                                    created_by: 1,
                                    updated_by: 1,
                                    created_at: '2020-09-16T11:18:28.000Z',
                                    updated_at: '2020-09-18T11:17:21.000Z',
                                },
                            ],
                        }
                    )
                )
            );
    }

    removeFromFavorites(propID: number, user: User) {
        return this.http
            .get<any>(`${environment.baseUrl}/properties/${propID}`)
            .pipe(
                map((data) => data.favoriteBy.filter((x) => x.id !== user.id)),
                switchMap((newDataArray) =>
                    this.http.put<any>(
                        `${environment.baseUrl}/properties/${propID}`,
                        {
                            favoriteBy: newDataArray,
                        }
                    )
                )
            );
    }

}
