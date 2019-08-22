import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListWrapperComponent } from './list-wrapper/list-wrapper.component';
import { WrapperserviceService } from './service/wrapperservice.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListWrapperComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WrapperserviceService]
})
export class AppModule { }
