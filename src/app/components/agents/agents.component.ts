import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-agents',
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
    agents: [] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http
            .get<any>(`${environment.baseUrl}/agents`)
            .subscribe((resData) => {
                this.agents = resData;
            });
    }
}
