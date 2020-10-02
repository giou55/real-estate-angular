import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
    agent: any;
    id: String;

    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.http
            .get<any>('http://localhost:1337/agents/' + this.id)
            .subscribe((resData) => {
                this.agent = resData;
            });
    }
}
