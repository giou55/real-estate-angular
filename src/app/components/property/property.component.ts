import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Property } from "../../models/property.model";
import { RecentPropertiesService } from '../recent-props/recent-props.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
  providers: [RecentPropertiesService]
})
export class PropertyComponent implements OnInit {

  property: Property;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private recentPropertiesService: RecentPropertiesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.property = this.recentPropertiesService.getProperty(this.id);
  }

}
