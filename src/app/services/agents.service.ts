import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Agent } from '../models/agent.model';

@Injectable({
    providedIn: 'root',
})
export class AgentsService {
    constructor(private http: HttpClient) {}

    getAgents() {
        return this.http.get<Agent[]>(`${environment.baseUrl}/agents`);
    }

    getAgentById(id: number) {
        return this.http.get<Agent>(`${environment.baseUrl}/agents/${id}`);
    }

    getAgentByName(name: string) {
        return this.http.get<Agent>(`${environment.baseUrl}/agents/${name}`);
    }

    getAgentByArea(area: string) {
        return this.http.get<Agent>(`${environment.baseUrl}/agents/${area}`);
    }
}
