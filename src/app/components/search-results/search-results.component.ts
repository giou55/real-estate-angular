import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Test } from "../../models/test.model";

@Component({
        selector: 'app-search-results',
        templateUrl: './search-results.component.html',
        styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

        constructor(private http: HttpClient) { }

        error = null;
        results: Test[] = [];

        ngOnInit(): void {
                this.http.get<Test[]>('http://localhost:1337/properties?location=Rome').subscribe(
                        properties => {
                                this.results = properties;
                        });
        }

}

