import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchFormService } from '../../services/searchForm.service';

@Component({
      selector: 'app-search-form-new',
      templateUrl: './search-form-new.component.html',
      styleUrls: ['./search-form-new.component.scss'],
      encapsulation: ViewEncapsulation.None
})
export class SearchFormNewComponent implements OnInit {
      selectedLocation;
      selectedMinPrice;
      selectedMaxPrice;
      selectedBeds;
      selectedBaths;
      selectedMinArea;
      selectedMaxArea;
      selectedMinYear;
      selectedMaxYear;
      selectedCooling;
      selectedHeating;

      emptyLocationField = false;
      valuesFromFields = {};
      paramsToSend = {};

      prices;
      beds;
      baths;
      area;
      year;

      constructor(
            private searchFormService: SearchFormService,
            private router: Router,
            private route: ActivatedRoute,
      ) { }

      ngOnInit(): void {
            this.selectedLocation = this.searchFormService.location;
            this.prices = this.searchFormService.prices;
            this.beds = this.searchFormService.beds;
            this.baths = this.searchFormService.baths;
            this.area = this.searchFormService.area;
            this.year = this.searchFormService.year;

            this.selectedMinPrice = this.searchFormService.selectedMinPrice;
            this.selectedMaxPrice = this.searchFormService.selectedMaxPrice;
            this.selectedBeds = this.searchFormService.selectedBeds;
            this.selectedBaths = this.searchFormService.selectedBaths;
            this.selectedMinArea = this.searchFormService.selectedMinArea;
            this.selectedMaxArea = this.searchFormService.selectedMaxArea;
            this.selectedMinYear = this.searchFormService.selectedMinYear;
            this.selectedMaxYear = this.searchFormService.selectedMaxYear;
            this.selectedCooling = this.searchFormService.cooling;
            this.selectedHeating = this.searchFormService.heating;

            this.emptyLocationField = false;
            this.valuesFromFields = {};
            this.paramsToSend = {};
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
                  this.searchFormService.saveFormData(form.value);
                  this.paramsToSend = this.createQueryParams(form.value);
                  this.router.navigate(['searchResults'],
                        {
                              queryParams: this.paramsToSend
                        });
            }
      }
}
