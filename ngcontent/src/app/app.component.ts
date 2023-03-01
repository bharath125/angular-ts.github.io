import { Component } from '@angular/core';
import { Output,EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcontent';

  btnClicked($event: any) {
    console.log($event)
    alert('button clicked')
  }


}
