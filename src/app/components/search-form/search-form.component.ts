import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

declare const createCustomSelect: any;

@Component({
        selector: 'app-search-form',
        templateUrl: './search-form.component.html',
        styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, AfterViewInit {

        constructor(private router: Router, private route: ActivatedRoute) { }

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

        onSubmit(form: NgForm) {
                console.log(form);
                this.router.navigate(['searchResults/2']);
        }

}

