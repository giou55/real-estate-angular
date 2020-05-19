import { Component, OnInit } from '@angular/core';

import { Property } from "../../models/property.model";
import { PropertiesService } from '../../services/properties.service';

declare const showSlides: any;

@Component({
  selector: 'app-featured-props',
  templateUrl: './featured-props.component.html',
  styleUrls: ['./featured-props.component.scss'],
  providers: [PropertiesService]
})
export class FeaturedPropsComponent implements OnInit {

  featuredProperties: Property[] = [];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.featuredProperties = this.propertiesService.getFeaturedProperties();
    showSlides(1);
  }

}



