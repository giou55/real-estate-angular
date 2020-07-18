import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

import { Property } from "../../models/property.model";

@Component({
      selector: 'app-search-results',
      templateUrl: './search-results.component.html',
      styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

      constructor(
            private route: ActivatedRoute,
            private http: HttpClient
      ) { }

      results: Property[] = [];
      id: String;
      obj = {};
      currentLocation: String;

      ngOnInit(): void {

            if (this.route.snapshot.queryParams.location_contains == '') {
                  this.results = [];
            } else {
                  this.currentLocation = this.route.snapshot.queryParams.location_contains;
            }

            this.route.queryParams.subscribe(
                  (params: Params) => {
                        this.obj = params;
                        console.log(params);

                        var str = "";
                        for (var key in this.obj) {
                              if (str != "") {
                                    str += "&";
                              }
                              str += key + "=" + encodeURIComponent(this.obj[key]);
                        }

                        console.log(str);

                        this.http.get<Property[]>('http://localhost:1337/properties?' + str).subscribe(
                              results => {
                                    this.currentLocation = this.route.snapshot.queryParams.location_contains;
                                    this.results = results;
                              }
                        );
                  }
            )
      }

}

