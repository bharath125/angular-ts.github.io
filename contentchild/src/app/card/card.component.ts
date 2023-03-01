import { AfterViewInit, Component, ContentChild, ElementRef,Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit{
  
 @ContentChild("header") cardContentHeader?:ElementRef ;

 @ViewChild('divContent',{static:false}) divContent?:ElementRef
 @ViewChild('div1',{static:false})div1?:ElementRef
 @ViewChild('hello',{static:false})hello?:ElementRef
 
 count=0;
 clicklisten:any;
  

 constructor(private el:ElementRef, private renderer:Renderer2) {
}
 

createElement() {
  const div = this.renderer.createElement('div');
  const text = this.renderer.createText('This Text is Inserted before the div1')
  this.renderer.appendChild(div, text);

  this.renderer.insertBefore(this.el.nativeElement,div,this.div1?.nativeElement)

}

createElement2() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Inserted inside div');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.divContent?.nativeElement, div);
  }


  exampleDiv2() {
    //Conent is always replaced. becuase preserveContent is false
    const e = this.renderer.selectRootElement('.div2',false);    
    const t = this.renderer.createText('  Content added to div2');
    this.renderer.appendChild(e, t);

  }

  ngAfterViewInit(){
      this.clicklisten=this.renderer.listen(this.hello?.nativeElement,'click',(evt)=>{this.count++})
  }

// ngAfterContentInit(){
//   this.renderer.setStyle(this.cardContentHeader?.nativeElement,"font-size","20px")
// }
ngOnDestroy(){
  this.clicklisten.unsubscribe()
}

}
