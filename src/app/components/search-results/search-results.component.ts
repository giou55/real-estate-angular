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

        ngOnInit(): void {

                console.log(this.route.snapshot.queryParams.location_contains);

                if (this.route.snapshot.queryParams.location_contains == '') {
                        this.results = [];
                }

                this.route.queryParams.subscribe(
                        (params: Params) => {
                                console.log(params);
                                this.obj = params;

                                var str = "";
                                for (var key in this.obj) {
                                        if (str != "") {
                                                str += "&";
                                        }
                                        str += key + "=" + encodeURIComponent(this.obj[key]);
                                }

                                this.http.get<Property[]>('http://localhost:1337/properties?' + str).subscribe(
                                        results => {
                                                console.log(results);
                                                this.results = results;
                                        }
                                );
                        }
                )
        }

}

