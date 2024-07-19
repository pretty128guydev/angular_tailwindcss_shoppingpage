import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class CustomSliderComponent {
  minValue = 0;
  maxValue = 5000000;
  minPrice = this.formatPrice(this.minValue);
  maxPrice = this.formatPrice(this.maxValue);

  private dragging: 'min' | 'max' | null = null;

  formatPrice(value: number): string {
    return `$${(value / 1000).toFixed(0)}K`;
  }

  updatePriceLabels() {
    this.minPrice = this.formatPrice(this.minValue);
    this.maxPrice = this.formatPrice(this.maxValue);
  }

  onDragStart(event: MouseEvent, type: 'min' | 'max') {
    this.dragging = type;
    document.addEventListener('mousemove', this.onDrag.bind(this));
    document.addEventListener('mouseup', this.onDragEnd.bind(this));
  }

  onDrag(event: MouseEvent) {
    if (this.dragging === null) return;

    const sliderRect = (event.target as HTMLElement).closest('.custom-slider')?.getBoundingClientRect() || { left: 0, width: 0 };
    const position = Math.min(Math.max(event.clientX - sliderRect.left, 0), sliderRect.width);
    const value = (position / sliderRect.width) * 5000000;

    if (this.dragging === 'min') {
      this.minValue = Math.min(value, this.maxValue - 1);
    } else if (this.dragging === 'max') {
      this.maxValue = Math.max(value, this.minValue + 1);
    }

    this.updatePriceLabels();
  }

  onDragEnd() {
    this.dragging = null;
    document.removeEventListener('mousemove', this.onDrag.bind(this));
    document.removeEventListener('mouseup', this.onDragEnd.bind(this));
  }
}
