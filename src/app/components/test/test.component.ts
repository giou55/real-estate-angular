import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Test } from "../../models/test.model";

@Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

        constructor(private http: HttpClient) { }

        error = null;
        loadedProperties: Test[];

        ngOnInit(): void {
                this.http.get<Test[]>('http://localhost:1337/properties').subscribe(
                        properties => {
                                this.loadedProperties = properties;
                                console.log(this.loadedProperties);
                        });
        }

}
