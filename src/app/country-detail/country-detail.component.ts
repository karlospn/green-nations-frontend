import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Country} from '../view-models/country';
import { AppDataService } from '../services/app-data.service';

import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  operation: string;
  errorMessage: string;
  country : Country;
  contryDefinition : Array<FieldDefinition> = [
    {
      key : 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key : 'name',
      type: 'string',
      isId: false,
      label: 'Name',
      required: true
    },
    {
      key : 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    }
  ];

  constructor(private appDataService : AppDataService, private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.operation = this.activatedRoute.snapshot.params['operation'];
    if(this.operation === 'create')
    {
      this.country = {id: 0, name: "", epiIndex: null};
    }
    else{
      this.appDataService.getCountriesById(this.activatedRoute.snapshot.params['id']).subscribe((data) => this.country = data);
    }
  }

  updateCountry(country : Country) {
    this.errorMessage = null;
    this.appDataService.updateCountry(country).subscribe(
      data => this.router.navigate(['authenticated/country-maint']),
      err => this.errorMessage = 'Error updating country');
  }

    createCountry(country : Country) {
    this.errorMessage = null;
    this.appDataService.createCountry(country).subscribe(
      data => this.router.navigate(['authenticated/country-maint']),
      err => this.errorMessage = 'Error updating country');
  }

}
