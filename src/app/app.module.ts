import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemoryLeakHandlerComponent } from './memory-leak-handler/memory-leak-handler.component';
import { ReactiveFieldComponent } from './reactive-field/reactive-field.component';
import { UntilKeyChangedComponent } from './until-key-changed/until-key-changed.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MemoryLeakHandlerComponent, ReactiveFieldComponent, UntilKeyChangedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
