import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-agent-search-form',
    templateUrl: './agent-search-form.component.html',
    styleUrls: ['./agent-search-form.component.scss'],
})
export class AgentSearchFormComponent implements OnInit {
    location: string;
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.location = '';
    }

    onSubmit(form: NgForm) {
        // this.queryParams = this.createQueryParams(form.value);
        this.router.navigate(['agent/results']);
    }
}
