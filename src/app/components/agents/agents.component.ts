import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';
import { environment } from '../../../environments/environment';

import { Agent } from '../../models/agent.model';

@Component({
    selector: 'app-agents',
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
    agents: Agent[] = [];
    base_url = environment.baseUrl;

    constructor(private agentsService: AgentsService) {}

    ngOnInit(): void {
        this.agentsService.getFeaturedAgents().subscribe((agents) => {
            this.agents = agents;
            console.log(agents);
        });
    }
}
