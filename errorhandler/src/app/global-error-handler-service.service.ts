import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class GlobalErrorHandlerServiceService implements ErrorHandler{
  
 

  constructor() { }

  handleError(error: any) {
    console.error("An error occured:", error.message)
    
    alert(error)
  }
}
