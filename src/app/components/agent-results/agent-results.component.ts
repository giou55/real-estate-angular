import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-agent-results',
    templateUrl: './agent-results.component.html',
    styleUrls: ['./agent-results.component.scss'],
})
export class AgentResultsComponent implements OnInit {
    base_url = environment.baseUrl;
    isLoading = false;
    results: [] = [];
    public p: number = 1;

    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.route.queryParams.subscribe((params: Params) => {
            var str = '';
            for (var key in params) {
                if (str != '') {
                    str += '&';
                }
                str += key + '=' + encodeURIComponent(params[key]);
            }

            this.http
                .get<any>(`${environment.baseUrl}/agents?${str}`)
                .subscribe((results) => {
                    this.isLoading = false;
                    this.results = results;
                });
        });
    }
}
