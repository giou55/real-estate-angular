import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { AgentsService } from '../../services/agents.service';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

import { User } from '../../models/user.model';
import { Agent } from '../../models/agent.model';

@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
    id: String;
    isAuthenticated = false;
    private userSub: Subscription;
    user: User = null;
    agent: Agent = null;
    base_url = environment.baseUrl;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private authService: AuthService,
        private agentsService: AgentsService
    ) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
            if (user) {
                this.user = user;
            }
        });
        this.id = this.route.snapshot.params['id'];
        this.agentsService.getAgentById(+this.id).subscribe((agent) => {
            this.agent = agent;
        });
    }
}
