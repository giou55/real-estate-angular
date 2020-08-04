import { Component, OnInit } from '@angular/core';

import { SearchFormService } from '../../services/searchForm.service';

@Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

      constructor(private searchFormService: SearchFormService) { }

      ngOnInit(): void {
            this.searchFormService.formInit();
      }
}
