import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GithubService } from './github.service';
import { GlobalHttpInterceptorService } from './global-http-interceptor.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService,{provide:HTTP_INTERCEPTORS,useClass:GlobalHttpInterceptorService,multi:true},
  {provide:ErrorHandler,useClass:GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
