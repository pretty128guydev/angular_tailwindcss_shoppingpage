import { Component } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent {
  minValue: number = 0;
  maxValue: number = 5000000;

  onMinValueChange(event: any) {
    const value = +event.target.value;
    if (value <= this.maxValue) {
      this.minValue = value;
    }
  }

  onMaxValueChange(event: any) {
    const value = +event.target.value;
    if (value >= this.minValue) {
      this.maxValue = value;
    }
  }
}
