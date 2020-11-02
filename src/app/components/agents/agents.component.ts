import { Component, OnInit } from '@angular/core';

import { AgentsService } from '../../services/agents.service';

import { Agent } from '../../models/agent.model';

@Component({
    selector: 'app-agents',
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
    agents: Agent[] = [];

    constructor(private agentsService: AgentsService) {}

    ngOnInit(): void {
        this.agentsService.getAgents().subscribe((agents) => {
            this.agents = agents;
        });
    }
}
