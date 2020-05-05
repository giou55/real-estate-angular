import { Component, OnInit } from '@angular/core';

import { Property } from "../../models/property.model";
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-recent-props',
  templateUrl: './recent-props.component.html',
  styleUrls: ['./recent-props.component.scss'],
  providers: [PropertiesService]
})
export class RecentPropsComponent implements OnInit {

  recentProperties: Property[] = [];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.recentProperties = this.propertiesService.getProperties();
  }

}
