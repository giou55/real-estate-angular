import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Property } from "../../models/property.model";

@Component({
        selector: 'app-property',
        templateUrl: './property.component.html',
        styleUrls: ['./property.component.scss'],
        providers: []
})
export class PropertyComponent implements OnInit {

        property: Property;
        id: String;

        constructor(
                private route: ActivatedRoute,
                private http: HttpClient) { }

        ngOnInit(): void {
                this.id = this.route.snapshot.params['id'];
                this.http.get<Property>('http://localhost:1337/properties/' + this.id).subscribe(
                        property => {
                                this.property = property;
                        });
        }

}
