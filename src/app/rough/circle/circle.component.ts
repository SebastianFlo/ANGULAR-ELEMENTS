import rough from 'roughjs';
import { Component, OnInit, AfterContentInit, AfterViewInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() angle: number = 60;

  canvas = {
    width: 300,
    height: 300
  };

  circleStyle = {
    fill: 'red',
    stroke: 'blue',
    hachureAngle: this.angle,
    hachureGap: 5,
    fillWeight: 2,
    strokeWidth: 2
  };

  rc;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    const angle: SimpleChange = changes.angle;
    if (angle.currentValue) {
      this.renderCircle(angle.currentValue);
    }
  }

  ngAfterViewInit(): void {
    this.rc = rough.canvas(document.getElementById('canvas'));
    this.renderCircle(this.angle);
  }

  renderCircle(hachureAngle) {
    if (!this.rc) {
      return;
    }
    this.rc.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.rc.circle(80, 120, 50, { ...this.circleStyle, hachureAngle });
  }
}
