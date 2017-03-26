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
  isDeleting : boolean = false;
  deleteId: number;
  deleteError : string;

  constructor(private appDataService : AppDataService, private router: Router) { }

  ngOnInit() {
    this.appDataService.getCountries().subscribe((data) => this.countries = data);
  }

  showDetailsCountry(id : number){
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

  editDetailsContry(id : number){
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);    
  }

  addNewCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  deleteCountryQuestion(id: number){
    this.deleteError = null;
    this.deleteId = id;
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  deleteCountry (id: number){
    this.isDeleting = true;
    this.appDataService.deleteCountry(id).subscribe(data => this.cancelDelete(), err => { this.deleteError = err; this.isDeleting = false;})
  }

}
