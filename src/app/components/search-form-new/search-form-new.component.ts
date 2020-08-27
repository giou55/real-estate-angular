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
      queryParams = {};

      constructor(
            private searchFormService: SearchFormService,
            private router: Router,
            private route: ActivatedRoute,
      ) { }

      ngOnInit(): void {
            this.priceValues = this.searchFormService.prices;
            this.bedsValues = this.searchFormService.beds;
            this.bathsValues = this.searchFormService.baths;
            this.areaValues = this.searchFormService.area;
            this.yearValues = this.searchFormService.year;
            this.location = this.route.snapshot.queryParams['location_contains'] ?
                  this.route.snapshot.queryParams['location_contains'] :
                  this.searchFormService.location;
            this.propertyID = this.route.snapshot.queryParams['propID'] ?
                  this.route.snapshot.queryParams['propID'] :
                  this.searchFormService.propertyID;
            this.minPrice = this.route.snapshot.queryParams['priceSale_gte'] ?
                  parseInt(this.route.snapshot.queryParams['priceSale_gte']) :
                  this.searchFormService.minPrice;
            this.maxPrice = this.route.snapshot.queryParams['priceSale_lte'] ?
                  parseInt(this.route.snapshot.queryParams['priceSale_lte']) :
                  this.searchFormService.maxPrice;
            this.minBeds = this.route.snapshot.queryParams['beds_gte'] ?
                  parseInt(this.route.snapshot.queryParams['beds_gte']) :
                  this.searchFormService.minBeds;
            this.minBaths = this.route.snapshot.queryParams['baths_gte'] ?
                  parseInt(this.route.snapshot.queryParams['baths_gte']) :
                  this.searchFormService.minBaths;
            this.minArea = this.route.snapshot.queryParams['area_gte'] ?
                  parseInt(this.route.snapshot.queryParams['area_lte']) :
                  this.searchFormService.minArea;
            this.maxArea = this.route.snapshot.queryParams['area_lte'] ?
                  parseInt(this.route.snapshot.queryParams['area_lte']) :
                  this.searchFormService.maxArea;
            this.minYear = this.route.snapshot.queryParams['year_built_gte'] ?
                  parseInt(this.route.snapshot.queryParams['year_built_lte']) :
                  this.searchFormService.minYear;
            this.maxYear = this.route.snapshot.queryParams['year_built_lte'] ?
                  parseInt(this.route.snapshot.queryParams['year_built_lte']) :
                  this.searchFormService.maxYear;
            this.heating = this.route.snapshot.queryParams['central_heating'] ?
                  this.route.snapshot.queryParams['central_heating'] :
                  this.searchFormService.heating;
            this.cooling = this.route.snapshot.queryParams['central_cooling'] ?
                  this.route.snapshot.queryParams['central_cooling'] :
                  this.searchFormService.cooling;
            this.rv_boat = this.route.snapshot.queryParams['rv_boat_parking'] ?
                  this.route.snapshot.queryParams['rv_boat_parking'] :
                  this.searchFormService.rv_boat;
            this.two_stories = this.route.snapshot.queryParams['two_stories'] ?
                  this.route.snapshot.queryParams['two_stories'] :
                  this.searchFormService.two_stories;
            this.deck_ratio = this.route.snapshot.queryParams['deck_patio'] ?
                  this.route.snapshot.queryParams['deck_patio'] :
                  this.searchFormService.deck_ratio;
            this.fireplace = this.route.snapshot.queryParams['fireplace'] ?
                  this.route.snapshot.queryParams['fireplace'] :
                  this.searchFormService.fireplace;
            this.swimming_pool = this.route.snapshot.queryParams['swimming_pool'] ?
                  this.route.snapshot.queryParams['swimming_pool'] :
                  this.searchFormService.swimming_pool;

            this.valuesFromFields = {};
            this.queryParams = {};
      }

      toggleAccordian() {
            var x = document.querySelector("div.accordion > span");
            if (x.innerHTML === "More Filters") {
                  x.innerHTML = "Less Filters";
            } else {
                  x.innerHTML = "More Filters";
            }
            var i = document.getElementById("fa-symbol");
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

      createQueryParams(values: any) {
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
            this.queryParams = this.createQueryParams(form.value);
            this.router.navigate(['searchResults'],
                  {
                        queryParams: this.queryParams
                  });
      }
}
