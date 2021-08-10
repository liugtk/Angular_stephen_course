import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertM2KPipe } from './convert-m2-k.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertM2KPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
