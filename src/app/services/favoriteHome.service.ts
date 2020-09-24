import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, switchMap, map, filter } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })

export class FavoriteHomeService {

      constructor(
            private http: HttpClient
      ) { }

      addToFavorites(propID: number, user: User) {
            this.http
                  .get<any>('http://localhost:1337/properties/' + propID)
                  .pipe(
                        switchMap(
                              (resData =>
                                    this.http
                                          .put<any>('http://localhost:1337/properties/' + propID,
                                                {
                                                      "favoriteBy": [
                                                            ...resData.favoriteBy,
                                                            {
                                                                  "id": user.id,
                                                                  "username": user.username,
                                                                  "email": user.email,
                                                                  "provider": "local",
                                                                  "confirmed": true,
                                                                  "blocked": false,
                                                                  "role": 1,
                                                                  "created_by": 1,
                                                                  "updated_by": 1,
                                                                  "created_at": "2020-09-16T11:18:28.000Z",
                                                                  "updated_at": "2020-09-18T11:17:21.000Z"
                                                            }
                                                      ]
                                                }
                                          )
                              )
                        )
                  )
                  .subscribe();
      }

      removeFromFavorites(propID: number, user: User) {
            this.http
                  .get<any>('http://localhost:1337/properties/' + propID)
                  .pipe(
                        // map(
                        //       resData => resData.filter(favorite => favorite.id !== user.id)
                        // ),
                        map(
                              data => data.favoriteBy
                        ),
                        filter(
                              data => data.id !== user.id
                        ),
                        switchMap(
                              newDataArray => this.http
                                    .put<any>('http://localhost:1337/properties/' + propID,
                                          {
                                                "favoriteBy": newDataArray
                                          }
                                    )
                        )
                  )
                  .subscribe();
      }

}