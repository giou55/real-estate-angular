import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchFormService } from '../../services/searchForm.service';

@Component({
    selector: 'app-search-form-minimal',
    templateUrl: './search-form-minimal.component.html',
    styleUrls: ['./search-form-minimal.component.scss'],
})
export class SearchFormMinimalComponent implements OnInit {
    location: string;
    valuesFromFields = {};
    queryParams = {};

    constructor(
        private searchFormService: SearchFormService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.location = this.route.snapshot.queryParams['location_contains']
            ? this.route.snapshot.queryParams['location_contains']
            : this.searchFormService.location;
        this.valuesFromFields = {};
        this.queryParams = {};
    }

    createQueryParams(values: any) {
        this.valuesFromFields = {
            location_contains: values.location,
        };
        for (let x in this.valuesFromFields) {
            if (!this.valuesFromFields[x]) {
                delete this.valuesFromFields[x];
            }
        }
        return this.valuesFromFields;
    }

    onSubmit(form: NgForm) {
        this.queryParams = this.createQueryParams(form.value);
        this.router.navigate(['search/results'], {
            queryParams: this.queryParams,
        });
    }
}
