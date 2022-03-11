import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class EstyledBtnDirective {

  @Input()
  bg: string = 'orange'

  constructor(private el: ElementRef ) { 

    this.el.nativeElement.style.backgroundColor = 'green'
    this.el.nativeElement.style.borderRadius = '8px'
    this.el.nativeElement.style.height = '50px'
    this.el.nativeElement.style.width = '150px'
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bg
  }

}
