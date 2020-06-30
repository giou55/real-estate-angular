import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Property } from "../../models/property.model";
// import { PropertiesService } from '../../services/properties.service';

import { HttpClient } from '@angular/common/http';

import { Test } from "../../models/test.model";

@Component({
        selector: 'app-property',
        templateUrl: './property.component.html',
        styleUrls: ['./property.component.scss'],
        providers: []
})
export class PropertyComponent implements OnInit {

        property: Test;
        id: String;

        constructor(
                private route: ActivatedRoute,
                private http: HttpClient) { }

        ngOnInit(): void {
                this.id = this.route.snapshot.params['id'];
                this.http.get<Test>('http://localhost:1337/properties/' + this.id).subscribe(
                        property => {
                                this.property = property;
                        });
        }

}
