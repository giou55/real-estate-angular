import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  toggleAccordian() {
    var i = document.getElementById("fa-symbol");
    // var panel = element.nextElementSibling;
    i.classList.toggle("fa-minus-square-o");
    i.classList.toggle("fa-plus-square-o");
    var panel = document.getElementById("panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

}
