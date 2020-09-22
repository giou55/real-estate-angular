import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, switchMap, map } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })

export class FavoriteHomeService {

      constructor(
            private http: HttpClient
      ) { }

      newDataArray = null;

      addToFavorites(propID: number, user: User) {
            this.http
                  .get<any>('http://localhost:1337/properties/' + propID)
                  .pipe(
                        concatMap(
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
                        concatMap(
                              (resData =>
                                    this.newDataArray = resData.favoriteBy.filter(obj => obj.id !== user.id)
                              )
                        )
                        // .switchMap(
                        //       (newDataArray) =>
                        //             this.http
                        //                   .put<any>('http://localhost:1337/properties/' + propID,
                        //                         {
                        //                               "favoriteBy": newDataArray
                        //                         }
                        //                   )
                        // )
                  )
                  .subscribe((newDataArray) =>
                        this.http
                              .put<any>('http://localhost:1337/properties/' + propID,
                                    {
                                          "favoriteBy": newDataArray
                                    }
                              )
                  );
      }

}