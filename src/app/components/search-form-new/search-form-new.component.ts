import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const createCustomSelect: any;

@Component({
        selector: 'app-search-form-new',
        templateUrl: './search-form-new.component.html',
        styleUrls: ['./search-form-new.component.scss']
})
export class SearchFormNewComponent implements OnInit, AfterViewInit {

        constructor() { }

        ngOnInit(): void { }

        ngAfterViewInit(): void {
                createCustomSelect();
        }

        toggleAccordian() {
                var x = document.querySelector("p.accordion > span");
                if (x.innerHTML === "More Filters") {
                        x.innerHTML = "Less Filters";
                } else {
                        x.innerHTML = "More Filters";
                }

                var i = document.getElementById("fa-symbol");
                // i.classList.toggle("fa-minus-square-o");
                // i.classList.toggle("fa-plus-square-o");
                i.classList.toggle("fa-minus");
                i.classList.toggle("fa-plus");

                var panel = document.getElementById("panel");
                panel.classList.toggle("o-visible");
                if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                }
        }

}

