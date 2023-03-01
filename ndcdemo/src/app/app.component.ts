import { Component } from '@angular/core';
import { MyDynamic1Component } from './my-dynamic1/my-dynamic1.component';
import { MyDynamic2Component } from './my-dynamic2/my-dynamic2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ndcdemo';
  // component = Math.random() > 0.5 ? MyDynamic1Component : MyDynamic2Component;
  component = MyDynamic1Component;
  inputs = { hello: 'bharath', some: () => 'hello world' };
  outputs = { doSome: (type: any) => alert(type) };
}
