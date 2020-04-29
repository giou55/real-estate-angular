import { Injectable } from "@angular/core";
import { Property } from "../models/property.model";
import { Observable, from } from "rxjs";

@Injectable()
export class RecentPropertiesService {
      private recentProps: Property[] = [
            new Property(
                  "DA2541",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Rome",
                  "For Rent",
                  160,
                  2003,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house1.jpg",
                  3200
            ),
            new Property(
                  "FY2730",
                  "Home in Merrick Way",
                  "Enchanting three bedroom, three bath home with spacious one bedroom, one bath…",
                  "Milan",
                  "For Sale",
                  210,
                  2012,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house2.jpg",
                  370000
            ),
            new Property(
                  "HR4892",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Naples",
                  "For Sale",
                  180,
                  2009,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house3.jpg",
                  550000
            ),
            new Property(
                  "DW2268",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  "For Sale",
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house4.jpg",
                  290000
            ),
            new Property(
                  "DW2268",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  "For Sale",
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house5.jpg",
                  450000
            ),
            new Property(
                  "DW2268",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  "For Sale",
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house6.jpg",
                  700000
            )
      ];

      getProperties(): Property[] {
            return this.recentProps;
      }

      getProperty(id: String): Property {
            return {
                  propID: "DA2541",
                  title: "Villa in Rome",
                  description: "fgrtgrthgtrh omoimol m om jmm oklm lkm",
                  location: "gtrhtyfhnfghngtyj",
                  sale_or_rent: "For Sale",
                  area_size: 240,
                  year_built: 2012,
                  beds: 3,
                  baths: 3,
                  garages: 2,
                  features: ["2 Stories", "Electric Range"],
                  imagePath: "assets/images/recent_props/house6.jpg",
                  price: 250000
            };
      }
}