import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterCompopnenet implements OnInit {
  currentTime!: string;
  selectedCategory: number | null = 1;
  categories = [
    { name: 'Sales', count: 12 },
    { name: 'Cannabis', count: 430 },
    { name: 'Pre-Rolls', count: 40 },
    { name: 'CBD Oil', count: 20 },
    { name: 'Magic Mushrooms', count: 34 },
    { name: 'Extracts', count: 26 },
    { name: 'Edibles', count: 32 },
    { name: 'Vape Pens', count: 12 },
    { name: 'Accessories', count: 10 },
    { name: 'Bath & Body', count: 8 },
    { name: 'Bundles', count: 24 },
    { name: 'Wholesale', count: 28 },
  ];

  selectCategory(index: number): void {
    this.selectedCategory = index;
  }

  constructor() { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
