import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Value {
      value: number;
      viewValue: string;
}

@Component({
      selector: 'app-search-form-new',
      templateUrl: './search-form-new.component.html',
      styleUrls: ['./search-form-new.component.scss'],
      encapsulation: ViewEncapsulation.None
})
export class SearchFormNewComponent {
      constructor(private router: Router, private route: ActivatedRoute) { }

      prices: Value[] = [
            { value: 0, viewValue: 'Any' },
            { value: 100000, viewValue: '100000' },
            { value: 200000, viewValue: '200000' },
            { value: 400000, viewValue: '400000' },
            { value: 600000, viewValue: '600000' },
            { value: 800000, viewValue: '800000' },
            { value: 1000000, viewValue: '1000000' },
            { value: 1500000, viewValue: '1500000' }
      ];
      beds: Value[] = [
            { value: 0, viewValue: 'Any' },
            { value: 1, viewValue: '1' },
            { value: 2, viewValue: '2' },
            { value: 3, viewValue: '3' },
            { value: 4, viewValue: '4' }
      ];
      baths: Value[] = [
            { value: 0, viewValue: 'Any' },
            { value: 1, viewValue: '1' },
            { value: 2, viewValue: '2' },
            { value: 3, viewValue: '3' },
            { value: 4, viewValue: '4' }
      ];
      area: Value[] = [
            { value: 0, viewValue: 'Any' },
            { value: 150, viewValue: '150' },
            { value: 250, viewValue: '250' },
            { value: 350, viewValue: '350' },
            { value: 450, viewValue: '450' }
      ];
      year: Value[] = [
            { value: 0, viewValue: 'Any' },
            { value: 1900, viewValue: '1900' },
            { value: 1920, viewValue: '1920' },
            { value: 1940, viewValue: '1940' },
            { value: 1960, viewValue: '1960' },
            { value: 1980, viewValue: '1980' },
            { value: 2000, viewValue: '2000' }
      ];

      @Input() location: string;

      selectedLocation = "";
      selectedMinPrice = this.prices[0].value;
      selectedMaxPrice = this.prices[0].value;
      selectedBeds = this.beds[0].value;
      selectedBaths = this.baths[0].value;
      selectedMinArea = this.area[0].value;
      selectedMaxArea = this.area[0].value;
      selectedMinYear = this.year[0].value;
      selectedMaxYear = this.year[0].value;

      emptyLocationField = false;
      valuesFromFields = {};
      paramsToSend = {};

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

      createQueryParams(values) {
            this.valuesFromFields = {
                  location_contains: values.location,
                  priceSale_gte: values.min_price,
                  priceSale_lte: values.max_price,
                  beds_gte: values.min_beds,
                  baths_gte: values.min_baths,
                  area_gte: values.min_area,
                  area_lte: values.max_area,
                  year_built_gte: values.min_year,
                  year_built_lte: values.max_year,
                  propID: values.property_id,
                  central_heating: values.heating,
                  central_cooling: values.cooling,
                  rv_boat_parking: values.rv_boat,
                  two_stories: values.two_stories,
                  deck_patio: values.deck_patio,
                  fireplace: values.fireplace,
                  swimming_pool: values.swimming_pool
            };
            for (let x in this.valuesFromFields) {
                  if (!this.valuesFromFields[x]) {
                        delete this.valuesFromFields[x];
                  }
            }
            return this.valuesFromFields;
      }

      onSubmit(form: NgForm) {
            if (form.value.location == "") {
                  this.emptyLocationField = true;
                  return;
            }
            if (form.value.location != "") {
                  this.emptyLocationField = false;
                  console.log(form);
                  // for (let x in form.value) {
                  //   console.log(x + "=" + form.value[x] + "<br>");
                  // }
                  this.paramsToSend = this.createQueryParams(form.value);
                  this.router.navigate(['searchResults'],
                        {
                              queryParams: this.paramsToSend
                        });
            }
      }
}
