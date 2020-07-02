import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Property } from "../../models/property.model";

@Component({
        selector: 'app-search-results',
        templateUrl: './search-results.component.html',
        styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

        constructor(private route: ActivatedRoute,
                private http: HttpClient) { }

        error = null;
        results: Property = null;
        id: String;

        ngOnInit(): void {
                this.id = this.route.snapshot.params['id'];
                this.http.get<Property>('http://localhost:1337/properties/' + this.id).subscribe(
                        results => {
                                this.results = results;
                        });
        }

}

