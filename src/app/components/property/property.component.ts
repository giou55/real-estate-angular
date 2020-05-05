import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Property } from "../../models/property.model";
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
  providers: [PropertiesService]
})
export class PropertyComponent implements OnInit {

  property: Property;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.property = this.propertiesService.getProperty(this.id);
  }

}
