import { Component, OnInit } from '@angular/core';

import { Property } from "../../models/property.model";
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  providers: [PropertiesService]
})
export class AgentsComponent implements OnInit {

  featuredProperties: Property[] = [];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.featuredProperties = this.propertiesService.getFeaturedProperties();
  }

}


