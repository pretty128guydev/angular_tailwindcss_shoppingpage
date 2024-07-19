import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './products.footer.html',
  styleUrls: ['./products.footer.css']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    const pages = [];
    const totalPages = this.totalPages;
    const pageNumbersToShow = 5; // Number of page numbers to show
    let startPage: number;
    let endPage: number;

    if (totalPages <= pageNumbersToShow) {
      // Show all pages if the total number is less than or equal to the pageNumbersToShow
      startPage = 1;
      endPage = totalPages;
    } else {
      // Calculate the start and end page numbers to show
      const midPoint = Math.ceil(pageNumbersToShow / 2);
      if (this.currentPage <= midPoint) {
        startPage = 1;
        endPage = pageNumbersToShow;
      } else if (this.currentPage + midPoint > totalPages) {
        startPage = totalPages - pageNumbersToShow + 1;
        endPage = totalPages;
      } else {
        startPage = this.currentPage - midPoint + 1;
        endPage = this.currentPage + midPoint - 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChanged.emit(page);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }
}
