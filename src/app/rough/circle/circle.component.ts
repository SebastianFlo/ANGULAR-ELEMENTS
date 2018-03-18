import rough from 'roughjs';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit, AfterViewInit {
  circleSttyle = {
    fill: 'red',
    stroke: 'blue',
    hachureAngle: 60,
    hachureGap: 5,
    fillWeight: 2,
    strokeWidth: 2
  };

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const rc = rough.canvas(document.getElementById('canvas'));
    rc.circle(80, 120, 50, this.circleSttyle);
  }
}
