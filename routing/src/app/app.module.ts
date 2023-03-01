import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './home/pages/aboutus/about-us.component';
import { ContactUsComponent } from './home/pages/contactus/contact-us.component';
import { HomeComponent } from './home/pages/home/home.component';
import { HomeModule } from './home';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
