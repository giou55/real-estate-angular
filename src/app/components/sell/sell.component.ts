import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    contactAgent(): void {
        this.router.navigate(['contact']);
    }
}
