import { Injectable } from '@angular/core';

interface Value {
      value: number;
      viewValue: string;
}

@Injectable({ providedIn: 'root' })
export class SearchFormService {
      prices = [
            { value: 0, viewValue: 'Any' },
            { value: 100000, viewValue: '100000' },
            { value: 200000, viewValue: '200000' },
            { value: 400000, viewValue: '400000' },
            { value: 600000, viewValue: '600000' },
            { value: 800000, viewValue: '800000' },
            { value: 1000000, viewValue: '1000000' },
            { value: 1500000, viewValue: '1500000' }
      ];
      beds = [
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

      location: string;
      minPrice: number;
      maxPrice: number;
      minBeds: number;
      minBaths: number;
      minArea: number;
      maxArea: number;
      minYear: number;
      maxYear: number;
      propertyID: string;
      heating: boolean;
      cooling: boolean;
      rv_boat: boolean;
      two_stories: boolean;
      deck_ratio: boolean;
      fireplace: boolean;
      swimming_pool: boolean;

      formInit() {
            this.location = "";
            this.minPrice = this.prices[0].value;
            this.maxPrice = this.prices[0].value;
            this.minBeds = this.beds[0].value;
            this.minBaths = this.baths[0].value;
            this.minArea = this.area[0].value;
            this.maxArea = this.area[0].value;
            this.minYear = this.year[0].value;
            this.maxYear = this.year[0].value;
            this.propertyID = "";
            this.heating = false;
            this.cooling = false;
            this.rv_boat = false;
            this.two_stories = false;
            this.deck_ratio = false;
            this.fireplace = false;
            this.swimming_pool = false;
      }

      saveFormData(values) {
            this.location = values.location;
            this.minPrice = values.min_price;
            this.maxPrice = values.max_price;
            this.minBeds = values.min_beds;
            this.minBaths = values.min_baths;
            this.minArea = values.min_area;
            this.maxArea = values.max_area;
            this.minYear = values.min_year;
            this.maxYear = values.max_year;
            this.propertyID = values.property_id;
            this.heating = values.heating;
            this.cooling = values.cooling;
            this.rv_boat = values.rv_boat;
            this.two_stories = values.two_stories;
            this.deck_ratio = values.deck_ratio;
            this.fireplace = values.fireplace;
            this.swimming_pool = values.swimming_pool;
      }

}