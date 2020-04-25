import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CountryService {

  constructor(private httpService: HttpClient) { }

  /**
   * Obtains countries from rest api
   */
  getCountries() {
    return this.httpService.get('https://restcountries.eu/rest/v2/all');
  }
}
