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
      isLoading = false;

      constructor(
            private route: ActivatedRoute,
            private http: HttpClient
      ) { }

      results: Property[] = [];

      ngOnInit(): void {
            this.isLoading = true;
            this.route.queryParams.subscribe(
                  (params: Params) => {
                        var str = "";
                        for (var key in params) {
                              if (str != "") {
                                    str += "&";
                              }
                              str += key + "=" + encodeURIComponent(params[key]);
                        }

                        this.http.get<Property[]>('http://localhost:1337/properties?' + str).subscribe(
                              results => {
                                    this.isLoading = false;
                                    this.results = results;
                              }
                        );
                  }
            )
      }

}

