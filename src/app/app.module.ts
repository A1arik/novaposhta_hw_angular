import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaposhtaComponent } from './novaposhta/novaposhta.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaposhtaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NovaposhtaComponent]
})
export class AppModule { }
