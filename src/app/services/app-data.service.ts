import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service'; 

import { Country } from '../view-models/country';

import { Observable } from 'rxjs/Rx';
 
@Injectable()
export class AppDataService {

    private countries : Array<Country> = [
        { id: 1, name: "Switzerland", epiIndex: 87.67},
        { id: 2, name: "Luxembourg", epiIndex: 83.29},
        { id: 3, name: "Australia", epiIndex: 82.4},
        { id: 4, name: "Singapore", epiIndex: 81.78},
        { id: 5, name: "Czech Republic", epiIndex: 81.47},
        { id: 6, name: "Germany", epiIndex: 80.47},
        { id: 7, name: "Spain", epiIndex: 79.09},
        { id: 8, name: "Austria", epiIndex: 78.32},
        { id: 9, name: "Sweden", epiIndex: 78.09},
        { id: 10, name: "Norway", epiIndex: 78.04},
    ];
        
    constructor(private userService: UserService) {}


    getCountries(): Observable<any> {
        return Observable.of(this.countries);
    }

    getCountriesById(id: number): Observable<Country> {
        var country = this.countries.find(x => x.id == id);
        return Observable.of(country);
    }

    updateCountry(updatedCountry: Country): Observable<any> {
        var country = this.countries.find(x => x.id == updatedCountry.id);
        Object.assign(country, updatedCountry);
        return Observable.of(country).delay(2000);
    }

    createCountry(vm: Country): Observable<any> {
        let id = 0;
        this.countries.forEach(c => { if (c.id >= id) id = c.id+1 });
        vm.id = id;
        this.countries.push(vm);
        return Observable.of(vm);
    }

}