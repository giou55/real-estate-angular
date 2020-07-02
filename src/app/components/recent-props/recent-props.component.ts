import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Property } from "../../models/property.model";

@Component({
        selector: 'app-recent-props',
        templateUrl: './recent-props.component.html',
        styleUrls: ['./recent-props.component.scss']
})
export class RecentPropsComponent implements OnInit {

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
