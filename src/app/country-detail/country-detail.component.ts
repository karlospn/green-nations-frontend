import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

import {Country} from '../view-models/country';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country : Country;

  constructor(private appDataService : AppDataService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.appDataService.getCountriesById(this.activatedRoute.snapshot.params['id']).subscribe((data) => this.country = data);
  }

}
