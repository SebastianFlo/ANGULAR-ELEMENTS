import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CircleComponent],
  entryComponents: [ CircleComponent ],
  exports: [CircleComponent]
})
export class RoughModule { }
