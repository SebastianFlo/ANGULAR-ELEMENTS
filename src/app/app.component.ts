import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloWorldComponent } from './hello-world/hello-world.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(injector: Injector) {
    // const NgElementConstructor = createNgElementConstructor(HelloWorldComponent, {injector});
    // customElements.register('hello-world', NgElementConstructor);
    const NgElementCtor = createCustomElement(HelloWorldComponent, {injector, });
    // tslint:disable-next-line:no-non-null-assertion
    customElements!.define('hello-world', NgElementCtor);
  }
}
