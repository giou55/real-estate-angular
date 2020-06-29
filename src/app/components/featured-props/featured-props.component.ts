import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Property } from "../../models/property.model";
import { PropertiesService } from '../../services/properties.service';

declare const showSlides: any;
declare const currentSlide: any;
declare const plusSlides: any;

@Component({
        selector: 'app-featured-props',
        templateUrl: './featured-props.component.html',
        styleUrls: ['./featured-props.component.scss'],
        providers: [PropertiesService]
})
export class FeaturedPropsComponent implements OnInit, AfterViewInit {

        featuredProperties: Property[] = [];

        constructor(private propertiesService: PropertiesService) { }

        ngOnInit(): void {
                this.featuredProperties = this.propertiesService.getFeaturedProperties();
        }

        ngAfterViewInit(): void {
                showSlides(1);
        }

        currentSlide = currentSlide;
        plusSlides = plusSlides;

}



