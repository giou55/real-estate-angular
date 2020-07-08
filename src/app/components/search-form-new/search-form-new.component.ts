import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Value {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-form-new',
  templateUrl: './search-form-new.component.html',
  styleUrls: ['./search-form-new.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  area: Value[] = [
    { value: 'any', viewValue: 'Any' },
    { value: '150', viewValue: '150' },
    { value: '250', viewValue: '250' },
    { value: '350', viewValue: '350' },
    { value: '450', viewValue: '450' }
  ];
  year: Value[] = [
    { value: 'any', viewValue: 'Any' },
    { value: '1900', viewValue: '1900' },
    { value: '1920', viewValue: '1920' },
    { value: '1940', viewValue: '1940' },
    { value: '1960', viewValue: '1960' },
    { value: '1980', viewValue: '1980' },
    { value: '2000', viewValue: '2000' }
  ];

  selectedMinPrice = this.prices[0].value;
  selectedMaxPrice = this.prices[0].value;
  selectedBeds = this.beds[0].value;
  selectedBaths = this.baths[0].value;
  selectedLocation = " ";
  selectedMinArea = this.area[0].value;
  selectedMaxArea = this.area[0].value;
  selectedMinYear = this.year[0].value;
  selectedMaxYear = this.year[0].value;

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
  }

}
