import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Test } from "../../models/test.model";

@Component({
        selector: 'app-featured-props',
        templateUrl: './featured-props.component.html',
        styleUrls: ['./featured-props.component.scss'],
        providers: []
})

export class FeaturedPropsComponent implements OnInit {

        constructor(private http: HttpClient) { }

        slideIndex = 1;
        slides;
        dots;
        error = null;
        featuredProperties: Test[] = [];

        plusSlides(n) {
                this.showSlides(this.slideIndex += n);
        }

        currentSlide(n) {
                this.showSlides(this.slideIndex = n);
        }

        showSlides(n) {
                var i;
                this.slides = document.getElementsByClassName("mySlides");
                this.dots = document.getElementsByClassName("dot");
                if (n > this.slides.length) {
                        this.slideIndex = 1;
                }
                if (n < 1) {
                        this.slideIndex = this.slides.length;
                }
                for (i = 0; i < this.slides.length; i++) {
                        this.slides[i].style.display = "none";
                }
                for (i = 0; i < this.dots.length; i++) {
                        this.dots[i].style.backgroundColor = '#bbb';
                }
                this.slides[this.slideIndex - 1].style.display = "block";
                this.dots[this.slideIndex - 1].style.backgroundColor = '#fd7955';
        }

        ngOnInit(): void {
                this.http.get<Test[]>('http://localhost:1337/properties?featured=true').subscribe(
                        properties => {
                                this.featuredProperties = properties;
                        });
        }

}



