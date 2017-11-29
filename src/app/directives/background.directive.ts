import {Directive, HostBinding, HostListener, OnInit, Input} from '@angular/core' ;

@Directive({
  selector: '[appBackground]'})
export class BackgroundDirective implements OnInit {

  @Input('appBackground') hoverColor: string;
  @Input() defaultColor: string;
  @HostBinding('style.backgroundColor') background: string;

  constructor() {
  }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }
}
