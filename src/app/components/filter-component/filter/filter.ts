import { Component } from "@angular/core";
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-price-filter",
  templateUrl: "./filter.html",
  styleUrls: ["./filter.css"]
})
export class PriceFilterComponent {
  minValue: number = 0;
  maxValue: number = 5000000;
  options: Options = {
    floor: 0,
    ceil: 5000000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  };
}
