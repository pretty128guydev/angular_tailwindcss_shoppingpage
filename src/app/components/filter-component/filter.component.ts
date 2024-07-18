import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterCompopnenet implements OnInit {
  currentTime!: string;

  constructor() { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
