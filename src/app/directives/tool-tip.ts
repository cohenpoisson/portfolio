import {Directive, ElementRef, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTip {
  constructor(private el: ElementRef) { }



}
