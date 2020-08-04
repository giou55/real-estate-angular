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
      priceValues: any;
      bedsValues: any;
      bathsValues: any;
      areaValues: any;
      yearValues: any;

      location: string;
      propertyID: string;
      minPrice: number;
      maxPrice: number;
      minBeds: number;
      minBaths: number;
      minArea: number;
      maxArea: number;
      minYear: number;
      maxYear: number;
      heating: boolean;
      cooling: boolean;
      rv_boat: boolean;
      two_stories: boolean;
      deck_ratio: boolean;
      fireplace: boolean;
      swimming_pool: boolean;

      valuesFromFields = {};
      paramsToSend = {};

      constructor(
            private searchFormService: SearchFormService,
            private router: Router,
            private route: ActivatedRoute,
      ) { }

      ngOnInit(): void {
            this.location = this.searchFormService.location;
            this.priceValues = this.searchFormService.prices;
            this.bedsValues = this.searchFormService.beds;
            this.bathsValues = this.searchFormService.baths;
            this.areaValues = this.searchFormService.area;
            this.yearValues = this.searchFormService.year;
            this.propertyID = this.searchFormService.propertyID;
            this.minPrice = this.searchFormService.minPrice;
            this.maxPrice = this.searchFormService.maxPrice;
            this.minBeds = this.searchFormService.minBeds;
            this.minBaths = this.searchFormService.minBaths;
            this.minArea = this.searchFormService.minArea;
            this.maxArea = this.searchFormService.maxArea;
            this.minYear = this.searchFormService.minYear;
            this.maxYear = this.searchFormService.maxYear;
            this.heating = this.searchFormService.heating;
            this.cooling = this.searchFormService.cooling;
            this.rv_boat = this.searchFormService.rv_boat;
            this.two_stories = this.searchFormService.two_stories;
            this.deck_ratio = this.searchFormService.deck_ratio;
            this.fireplace = this.searchFormService.fireplace;
            this.swimming_pool = this.searchFormService.swimming_pool;

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
            this.searchFormService.saveFormData(form.value);
            this.paramsToSend = this.createQueryParams(form.value);
            this.router.navigate(['searchResults'],
                  {
                        queryParams: this.paramsToSend
                  });
      }
}
