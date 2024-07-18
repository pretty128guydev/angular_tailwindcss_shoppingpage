import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-header',
  templateUrl: './high-header.component.html',
  styleUrls: ['./high-header.component.css']
})
export class HightHeaderCompopnenet implements OnInit {
  currentTime!: string;

  constructor() { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
