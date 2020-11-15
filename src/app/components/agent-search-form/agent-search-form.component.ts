import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

import { AreasService } from '../../services/areas.service';

@Component({
    selector: 'app-agent-search-form',
    templateUrl: './agent-search-form.component.html',
    styleUrls: ['./agent-search-form.component.scss'],
})
export class AgentSearchFormComponent implements OnInit {
    base_url = environment.baseUrl;
    isLoading = false;
    areas: [] = [];
    location: string;
    name: string;
    queryParams = {};

    constructor(private router: Router, private areasService: AreasService) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.areasService.getAreas().subscribe((areas) => {
            this.areas = areas;
        });
    }

    onSubmitLocation(form: NgForm) {
        this.queryParams = {
            'areas.name_contains': form.value.location,
        };
        this.router.navigate(['agent/results'], {
            queryParams: this.queryParams,
        });
    }

    onSubmitName(form: NgForm) {
        this.queryParams = {
            name_contains: form.value.name,
        };
        this.router.navigate(['agent/results'], {
            queryParams: this.queryParams,
        });
    }

    findAgentsByLocation(area) {
        this.queryParams = {
            'areas.name_contains': area,
        };
        this.router.navigate(['agent/results'], {
            queryParams: this.queryParams,
        });
    }
}
