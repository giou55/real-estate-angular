import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { environment } from '../../../environments/environment';

import { Property } from '../../models/property.model';

@Component({
    selector: 'app-featured-properties',
    templateUrl: './featured-properties.component.html',
    styleUrls: ['./featured-properties.component.scss'],
    providers: [],
})
export class FeaturedPropertiesComponent implements OnInit {
    base_url = environment.baseUrl;
    slideIndex: number = 1;
    slides: HTMLCollectionOf<any>;
    dots: HTMLCollectionOf<any>;
    error = null;
    properties: Property[] = [];

    constructor(private propertiesService: PropertiesService) {}

    plusSlides(n: number) {
        this.showSlides((this.slideIndex += n));
    }

    currentSlide(n: number) {
        this.showSlides((this.slideIndex = n));
    }

    showSlides(n: number) {
        var i: number;
        this.slides = document.getElementsByClassName('mySlides');
        this.dots = document.getElementsByClassName('dot');
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        for (i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].style.backgroundColor = '#bbb';
        }
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.dots[this.slideIndex - 1].style.backgroundColor = '#fd7955';
    }

    ngOnInit(): void {
        this.propertiesService
            .getFeaturedProperties()
            .subscribe((properties) => {
                this.properties = properties;
            });
    }
}
