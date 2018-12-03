import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';  
import {MenuItem} from 'primeng/api'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class InputGroupDemo {

}
export class AppModule { }
