import { Injectable } from "@angular/core";
import { House } from "./house.model";
import { Observable, from } from "rxjs";

@Injectable()
export class Data {
      private houses: House[] = [
            new House(
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Rome",
                  160,
                  2003,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "ggrtgrtrthrh",
                  250.000
            ),
            new House(
                  "Home in Merrick Way",
                  "Enchanting three bedroom, three bath home with spacious one bedroom, one bath…",
                  "Milan",
                  210,
                  2012,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "ggrtgrtrthrh",
                  370.000
            ),
            new House(
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Naples",
                  180,
                  2009,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "ggrtgrtrthrh",
                  550.000
            ),
            new House(
                  "Villa on Hollywood Boulevard",
                  "The very best waterfront location in Harbor Islands complete with private dock…",
                  "Turin",
                  240,
                  2001,
                  3,
                  2,
                  2,
                  ["2 Stories", "Electric Range"],
                  "ggrtgrtrthrh",
                  290.000
            )
      ];

      getHouses(): Observable<House[]> {
            return from([this.houses]);
      }
}