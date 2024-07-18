import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  onSearch() {
    console.log('Search term:', this.searchTerm);
    // Implement your search functionality here
  }
}
