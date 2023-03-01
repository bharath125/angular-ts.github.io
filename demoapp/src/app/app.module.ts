import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { FormsModule } from '@angular/forms';
import { TempConverterPipe } from './temp-convertor.pipe';
import { ListComponent } from './newcomp/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    TempConverterPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
