import { Component, OnInit } from '@angular/core';

import { Property } from "../../models/property.model";
import { FeaturedPropertiesService } from './featured-props.service';

@Component({
  selector: 'app-featured-props',
  templateUrl: './featured-props.component.html',
  styleUrls: ['./featured-props.component.scss'],
  providers: [FeaturedPropertiesService]
})
export class FeaturedPropsComponent implements OnInit {

  featuredProperties: Property[] = [];

  constructor(private featuredPropertiesService: FeaturedPropertiesService) { }

  ngOnInit(): void {
    this.featuredProperties = this.featuredPropertiesService.getProperties();
  }

}



