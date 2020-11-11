import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-agent-search-form',
    templateUrl: './agent-search-form.component.html',
    styleUrls: ['./agent-search-form.component.scss'],
})
export class AgentSearchFormComponent implements OnInit {
    location: string;
    name: string;
    valuesFromFields = {};
    queryParams = {};

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.location = this.route.snapshot.queryParams['areas.name_contains']
            ? this.route.snapshot.queryParams['areas.name_contains']
            : '';
        this.name = this.route.snapshot.queryParams['name_contains']
            ? this.route.snapshot.queryParams['name_contains']
            : '';
    }

    createQueryParams(values: any) {
        this.valuesFromFields = {
            'areas.name_contains': values.location,
            name_contains: values.name,
        };
        for (let x in this.valuesFromFields) {
            if (!this.valuesFromFields[x]) {
                delete this.valuesFromFields[x];
            }
        }
        return this.valuesFromFields;
    }

    onSubmitLocation(form: NgForm) {
        this.queryParams = this.createQueryParams(form.value);
        this.router.navigate(['agent/results'], {
            queryParams: this.queryParams,
        });
    }

    onSubmitName(form: NgForm) {
        this.queryParams = this.createQueryParams(form.value);
        this.router.navigate(['agent/results'], {
            queryParams: this.queryParams,
        });
    }
}
