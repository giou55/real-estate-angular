import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Property } from "../../models/property.model";

@Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

        constructor(private http: HttpClient) { }

        error = null;
        recentProperties: Property[] = [];

        ngOnInit(): void {
                this.http.get<Property[]>('http://localhost:1337/properties').subscribe(
                        properties => {
                                this.recentProperties = properties;
                        });
        }

}
