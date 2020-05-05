import { Injectable } from "@angular/core";
import { Property } from "../models/property.model";

@Injectable()
export class PropertiesService {
      private properties: Property[] = [
            new Property(
                  "DA2541",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Rome",
                  "For Rent",
                  false,
                  160,
                  2003,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent-props-small/house1.jpg",
                  "assets/images/recent-props-large/house1.jpg",
                  41.9904847, 12.6352517,
                  3200
            ),
            new Property(
                  "FY2730",
                  "Home in Merrick Way",
                  "Enchanting three bedroom, three bath home with spacious one bedroom, one bath…",
                  "Milan",
                  "For Sale",
                  true,
                  210,
                  2012,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent-props-small/house11.jpg",
                  "assets/images/recent-props-large/house11.jpg",
                  45.3684792, 9.143157,
                  370000
            ),
            new Property(
                  "HR4892",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Naples",
                  "For Sale",
                  true,
                  180,
                  2009,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent-props-small/house3.jpg",
                  "assets/images/recent-props-large/house3.jpg",
                  40.8607401, 14.2129469,
                  550000
            ),
            new Property(
                  "DW2268",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  "For Sale",
                  false,
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent-props-small/house10.jpg",
                  "assets/images/recent-props-large/house10.jpg",
                  40.8501274, 14.2823844,
                  290000
            ),
            new Property(
                  "DP4821",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  "For Sale",
                  false,
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent-props-small/house12.jpg",
                  "assets/images/recent-props-large/house12.jpg",
                  40.8501274, 14.2823844,
                  450000
            ),
            new Property(
                  "LT5471",
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  "For Sale",
                  true,
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent-props-small/house6.jpg",
                  "assets/images/recent-props-large/house6.jpg",
                  40.8501274, 14.2823844,
                  700000
            )
      ];

      getProperties(): Property[] {
            return this.properties;
      }

      getProperty(id: String): Property {
            return this.properties.find(p => p.propID == id);
      }
      getFeaturedProperties(): Property[] {
            return this.properties.filter(p => p.featured == true);
      }
}