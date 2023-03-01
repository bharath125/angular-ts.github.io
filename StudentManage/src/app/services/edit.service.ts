import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  editedStudent!:Object
  constructor() { 
    this.editedStudent={}
  }

  edit(item:any){
    this.editedStudent=item
  }

}
