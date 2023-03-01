import { Component, ErrorHandler, Inject, Injector } from '@angular/core';
import { GlobalErrorHandlerServiceService } from './global-error-handler-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'errorhandler';
  

constructor(private ghe:GlobalErrorHandlerServiceService ){
}

  throwError(){
   this.ghe.handleError(console.log())
  }



}
