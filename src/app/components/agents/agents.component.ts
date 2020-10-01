import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
            .get<any>('http://localhost:1337/agents')
            .subscribe((resData) => {
                this.agents = resData;
            });
    }
}
