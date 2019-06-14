import { Component } from '@angular/core';
import { exchange } from './currency-mock';
import {Currency} from './Currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS5';
  currencies = exchange;
  private selectedCurrency: Currency;

  selectCurrency(currency: Currency) {
    this.selectedCurrency = currency;
  }
}
