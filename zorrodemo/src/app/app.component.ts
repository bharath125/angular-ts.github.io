import { Component } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzMarks } from 'ng-zorro-antd/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zorrodemo';

value?:string;

disabled = false;
  value1 = 30;
  value2 = [20, 50];
  
  reverse = true;

  marks: NzMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };

  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }





}
