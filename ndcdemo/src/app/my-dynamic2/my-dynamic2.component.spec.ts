import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamic2Component } from './my-dynamic2.component';

describe('MyDynamic2Component', () => {
  let component: MyDynamic2Component;
  let fixture: ComponentFixture<MyDynamic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDynamic2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDynamic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
