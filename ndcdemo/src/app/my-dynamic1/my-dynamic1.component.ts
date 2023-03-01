import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dynamic1',
  templateUrl: './my-dynamic1.component.html',
  styleUrls: ['./my-dynamic1.component.css'],
})
export class MyDynamic1Component {
  @Input()
  hello!: string;

  @Input()
  some!: Function;

  @Output()
  doSome = new EventEmitter<string>();
}
