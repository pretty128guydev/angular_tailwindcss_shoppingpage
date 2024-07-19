import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
review: any;
mark: any;
  id: number;
  name: string;
  namePath: string;
  description: string;
  price: number;
  stockQuantity: number;
  imgURL: string;
  categories: string[];
  username: string | null;
  listedAt: string;
  phoneNumber: string;
  city: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://199.127.61.93:8080/product'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
      console.log(this.apiUrl)
      console.log("ssdad")
    return this.http.get<Product[]>(this.apiUrl);
  }
}
