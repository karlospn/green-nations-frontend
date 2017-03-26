import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/country';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries : Array<Country>;
  constructor(private appDataService : AppDataService, private router: Router) { }

  ngOnInit() {
    this.appDataService.getCountries().subscribe((data) => this.countries = data);
  }

  showDetailsCountry(id : number){
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

}
