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

      location = "";
      selectedMinPrice = this.prices[0].value;
      selectedMaxPrice = this.prices[0].value;
      selectedBeds = this.beds[0].value;
      selectedBaths = this.baths[0].value;
      selectedMinArea = this.area[0].value;
      selectedMaxArea = this.area[0].value;
      selectedMinYear = this.year[0].value;
      selectedMaxYear = this.year[0].value;
      heating = false;
      cooling = false;

      formData: {
            location_contains: string
            // priceSale_gte: number,
            // priceSale_lte: number,
            // beds_gte: number,
            // baths_gte: number,
            // area_gte: number,
            // area_lte: number,
            // year_built_gte: number,
            // year_built_lte: number,
            // propID: string,
            // central_heating: boolean,
            // central_cooling: boolean,
            // rv_boat_parking: boolean,
            // two_stories: boolean,
            // deck_patio: boolean,
            // fireplace: boolean,
            // swimming_pool: boolean
      };

      saveFormData(values) {
            this.location = values.location;
            this.selectedMinPrice = values.min_price;
            this.selectedMaxPrice = values.max_price;
            this.selectedBeds = values.min_beds;
            this.selectedBaths = values.min_baths;
            this.selectedMinArea = values.min_area;
            this.selectedMaxArea = values.max_area;
            this.selectedMinYear = values.min_year;
            this.selectedMaxYear = values.max_year;
            this.heating = values.heating;
            this.cooling = values.cooling;

            // this.formData.priceSale_gte = newData.location.min_price;
            // this.formData.priceSale_lte = newData.location;
            // this.formData.beds_gte = newData.location;
            // this.formData.baths_gte = newData.location;
            // this.formData.area_gte = newData.location;
            // this.formData.area_lte = newData.location;
            // this.formData.year_built_gte = newData.location;
            // this.formData.year_built_lte = newData.location;
            // this.formData.propID = newData.location;
            // this.formData.central_heating = newData.location;
            // this.formData.central_cooling = newData.location;
            // this.formData.rv_boat_parking = newData.location;
            // this.formData.two_stories = newData.location;
            // this.formData.deck_patio = newData.location;
            // this.formData.fireplace = newData.location;
            // this.formData.swimming_pool = newData.location;
      }

      getFormData() {
            return this.formData;
      }

}