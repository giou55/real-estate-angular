import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchFormService } from '../../services/searchForm.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    h3_style = {
        color: 'white',
    };

    constructor(
        private searchFormService: SearchFormService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.searchFormService.formInit();
    }

    contactAgent(): void {
        this.router.navigate(['agent/search']);
    }

    browseProperties(): void {
        this.router.navigate(['search/results']);
    }
}
