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
                  160,
                  2003,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "assets/images/recent_props/house1.jpg",
                  850000
            ),
            new Property(
                  "FY2730",
                  "Home in Merrick Way",
                  "Enchanting three bedroom, three bath home with spacious one bedroom, one bath…",
                  "Milan",
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
}