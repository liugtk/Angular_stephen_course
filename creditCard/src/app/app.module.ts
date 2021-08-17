import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { TextInputComponent } from './text-input/text-input.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
