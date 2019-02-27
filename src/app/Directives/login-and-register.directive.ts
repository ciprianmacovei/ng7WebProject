import { Directive, HostListener, OnInit, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoginAndRegister]'
})
export class LoginAndRegisterDirective implements OnInit {

  @HostBinding('style.border') border: String = 'none';

  constructor(private render:Renderer2, private eleRef: ElementRef) { }

  ngOnInit(){
    // this.render.addClass(this.eleRef.nativeElement,'')
  }

  @HostListener('mouseenter') mouseenter (eventData: Event) {
    this.border = '2px solid white';
  }

  @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.border = 'none';
  }

}
