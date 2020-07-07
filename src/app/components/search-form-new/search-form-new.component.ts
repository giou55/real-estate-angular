import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Value {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-form-new',
  templateUrl: './search-form-new.component.html',
  styleUrls: ['./search-form-new.component.scss']
})
export class SearchFormNewComponent {
  prices: Value[] = [
    { value: 'any', viewValue: 'Any' },
    { value: '10000', viewValue: '10000' },
    { value: '20000', viewValue: '20000' },
    { value: '50000', viewValue: '50000' },
    { value: '100000', viewValue: '100000' },
    { value: '200000', viewValue: '200000' }
  ];
  beds: Value[] = [
    { value: 'any', viewValue: 'Any' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];
  baths: Value[] = [
    { value: 'any', viewValue: 'Any' },
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];

  selectedMinPrice = this.prices[0].value;
  selectedMaxPrice = this.prices[0].value;
  selectedBeds = this.beds[0].value;
  selectedBaths = this.baths[0].value;
  selectedLocation = "aaaa";

  locationFormControl = new FormControl('', [
    Validators.required
  ]);

}
