import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { RoughModule } from './rough/rough.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldModule,
    RoughModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
