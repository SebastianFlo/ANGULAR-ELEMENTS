import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{ name }}</h1>`
})
export class HelloWorldComponent {
  @Input() name: string = 'World!';
}

@NgModule({
  declarations: [ HelloWorldComponent ],
  entryComponents: [ HelloWorldComponent ],
})
export class HelloWorldModule { }
