import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  private countries: Array<Country>;
  private countriesToShow : Array<Country>;
  private errorMessage : string;
  private count = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appDataService: AppDataService) { }

  ngOnInit() {
    this.appDataService.getCountries().subscribe(data => this.countries = data, err => this.errorMessage = err );
    this.count = this.activatedRoute.snapshot.params['count'];
    this.getCountriesToShow();

    this.activatedRoute.params.subscribe( params => {
      this.count = params['count'];
      this.getCountriesToShow();
    });
  }

  private getCountriesToShow() {
    if(this.count > 0) {
      this.countriesToShow = this.countries.slice(0, this.count);
    } else {
      this.countriesToShow = this.countries;
    }
  }
}
