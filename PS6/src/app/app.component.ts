import { Component } from '@angular/core';
import { model } from './model/model';
import { ExchangeService} from './exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  private selectedCurrency: model = null;
  currencies = [];

  getRate(): void {
    this.exchangeService.getRate()
      .subscribe(data => {
        this.currencies = data;
        console.log(`exchange rate ${this.currencies}`);
      });

  }

  displayRate(currency: model) {
    this.selectedCurrency = currency;
  }
  constructor(private exchangeService: ExchangeService) {
  }
  ngOnInit() {
    this.getRate();
  }
}
