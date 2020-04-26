import { Component, OnInit } from '@angular/core';

import { Property } from "../models/property.model";
import { RecentPropertiesService } from './recent-props.service';

@Component({
  selector: 'app-recent-props',
  templateUrl: './recent-props.component.html',
  styleUrls: ['./recent-props.component.scss'],
  providers: [RecentPropertiesService]
})
export class RecentPropsComponent implements OnInit {

  recentProperties: Property[] = [];

  constructor(private recentPropertiesService: RecentPropertiesService) { }

  ngOnInit(): void {
    this.recentProperties = this.recentPropertiesService.getProperties();
  }

}
