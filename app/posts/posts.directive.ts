import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive ({
    selector: '[show-post]',
    host : {
        //   '(click)': 'onClick()',
        //   '(mouseup)': 'onMouseUp()',
        // '(click)': 'onClick()',
    }
})

export class ShowPostDirective {
    
   private _el: HTMLElement;
   
   constructor(_el: ElementRef) {
       this._el = _el.nativeElement;  
    //    this._el.style.backgroundColor = "red";    
   }
   
    // onMouseDown() {
    //     this._el.style.backgroundColor = "gray";
       
    // }  
//    onClick() {
//        //this._el
//        this._el.style.backgroundColor = '#ccc';
//    }
   
   
    // onMouseUp () {
    //      this._el.style.backgroundColor = null;
       
    //  }
   

}