import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-agent-search-form',
    templateUrl: './agent-search-form.component.html',
    styleUrls: ['./agent-search-form.component.scss'],
})
export class AgentSearchFormComponent implements OnInit {
    location: string;
    constructor() {}

    ngOnInit(): void {
        this.location = '';
    }

    onSubmit(form: NgForm) {}
}
