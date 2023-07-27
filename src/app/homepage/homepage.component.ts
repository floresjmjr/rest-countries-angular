import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  flag = { image: '', desc: '' };
  coatOfArms: String = '';
  countryInfo = {
    officialName: '',
    commonName: '',
    currencies: {},
    languages: {},
    capitalCity: '',
    population: '',
  };
  handledError: String = 'Country Information Panel';

  constructor(private http: HttpClient) {}
  lookUpCountryHandler(country: String): void {
    this.http
      .get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .subscribe({
        next: (data: any) => {
          this.flag.image = data[0].flags.png;
          this.flag.desc = data[0].flags.alt;
          this.coatOfArms = data[0].coatOfArms.png;
          this.countryInfo.commonName = data[0].name.common;
          this.countryInfo.officialName = data[0].name.official;
          this.countryInfo.currencies = data[0].currencies;
          this.countryInfo.languages = data[0].languages;
          this.countryInfo.capitalCity = data[0].capital[0];
          this.countryInfo.population =
            data[0].population.toLocaleString('en-US');
        },
        error: (error: HttpErrorResponse) => {
          this.flag = { image: '', desc: '' };
          this.coatOfArms = '';
          this.countryInfo = {
            officialName: '',
            commonName: '',
            currencies: {},
            languages: {},
            capitalCity: '',
            population: '',
          };
          this.handledError = `When searching for country "${country}", the server returned an error: ${error.statusText}.`;
        },
      });
  }
}
