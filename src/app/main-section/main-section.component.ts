import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent {
  @Input() countryInfo = {
    officialName: '',
    commonName: '',
    currencies: {},
    languages: {},
    capitalCity: '',
    population: '',
  };
  @Input() errorMessage?: String;

}
