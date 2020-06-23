import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const createCustomSelect: any;

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, AfterViewInit {

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        createCustomSelect();
    }

    toggleAccordian() {
        var i = document.getElementById("fa-symbol");
        // var panel = element.nextElementSibling;
        i.classList.toggle("fa-minus-square-o");
        i.classList.toggle("fa-plus-square-o");
        var panel = document.getElementById("panel");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

}
