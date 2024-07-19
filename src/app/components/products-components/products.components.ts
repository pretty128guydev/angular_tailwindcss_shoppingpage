import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.components.html',
  styleUrls: ['./products.components.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  totalItems = 100; // Set the total number of items
  itemsPerPage = 10; // Number of items per page
  currentPage = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.productService)
    console.log(this.productService.getProducts())
    this.productService.getProducts().subscribe((data: Product[]) => {
        console.log(data)
      this.products = data;
    });
  }

  onButtonClick(product: Product) {
    console.log('Button clicked for:', product.name);
    // Handle button click logic here
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    // Add logic to fetch new data based on the current page
  }
}
