import { Component, OnInit } from '@angular/core';

import { Agent } from "../../models/agent.model";
import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  providers: [AgentsService]
})
export class AgentsComponent implements OnInit {

  agents: Agent[] = [];

  constructor(private agentsService: AgentsService) { }

  ngOnInit(): void {
    this.agents = this.agentsService.getAgents();
  }

}


