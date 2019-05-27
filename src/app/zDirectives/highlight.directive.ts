import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  ngOnInit(){
    this.backgroundColor= this.defaultColor;
  }

  @Input()
  defaultColor:string = "transparent";
  @Input()
  highlightColor:string="#ccdce7";

  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.fontWeight') fontWeight:string = "normal";

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor=this.highlightColor;
    this.fontWeight="bold";
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.defaultColor;
    this.fontWeight="normal";
  }

}
