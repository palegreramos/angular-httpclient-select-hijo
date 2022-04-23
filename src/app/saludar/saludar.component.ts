import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}