import { Injectable } from "@angular/core";
import { Property } from "../models/property.model";

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
                  "assets/images/recent-props-small/house1.jpg",
                  "assets/images/recent-props-large/house1.jpg",
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
                  "assets/images/recent-props-small/house11.jpg",
                  "assets/images/recent-props-large/house11.jpg",
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
                  "assets/images/recent-props-small/house3.jpg",
                  "assets/images/recent-props-large/house3.jpg",
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
                  "assets/images/recent-props-small/house10.jpg",
                  "assets/images/recent-props-large/house10.jpg",
                  290000
            ),
            new Property(
                  "DP4821",
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
                  "assets/images/recent-props-small/house12.jpg",
                  "assets/images/recent-props-large/house12.jpg",
                  450000
            ),
            new Property(
                  "LT5471",
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
                  "assets/images/recent-props-small/house6.jpg",
                  "assets/images/recent-props-large/house6.jpg",
                  700000
            )
      ];

      getProperties(): Property[] {
            return this.recentProps;
      }

      getProperty(id: String): Property {
            return this.recentProps.find(p => p.propID == id);
      }
}