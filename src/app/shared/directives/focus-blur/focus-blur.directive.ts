import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[focus-blur]'
})
export class FocusBlurDirective implements OnChanges {

  @Input('focus-blur') state: boolean;

  private el: ElementRef;
  
  constructor(el: ElementRef) {
    this.el = el;
   }

  ngOnChanges() {
    if (this.state) {
      console.log('focus');
      this.el.nativeElement.focus();
    } else {
      console.log('blur');
      this.el.nativeElement.blur();
    }
    
  }
}
