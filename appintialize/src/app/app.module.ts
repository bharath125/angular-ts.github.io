import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInitService } from './app-init.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init()
  }
}


export function initializeApp2() {
  return (): Promise<void> => {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp2 called`);
      setTimeout(() => {
        console.log(`initializeApp2 Finished`);
        resolve();
      }, 2000);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppInitService, { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeApp2, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
