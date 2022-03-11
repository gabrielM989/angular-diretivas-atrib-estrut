import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class EstyledBtnDirective {

  @Input()
  bg: string = 'orange'

  constructor(private el: ElementRef, private renderer: Renderer2 ) { 

    this.el.nativeElement.style.backgroundColor = 'green'
    this.el.nativeElement.style.borderRadius = '8px'
    this.el.nativeElement.style.height = '50px'
    this.el.nativeElement.style.width = '150px'
    this.el.nativeElement.style.cursor = 'pointer'

    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red') /* segunda maneira de fazer */

    /* terceira maneira de fazer */

    this.renderer.addClass(this.el.nativeElement, 'estyled-btn') /* É uma maneira de deixar o código mais limpo, deixando o CSS a parte */
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bg
  }

  @HostListener('click', ['$event']) /* para receber os dados do evento, basta passar o ['$event'] */
  darOi(evento: any): void{
    alert('Olá!!!')
    console.log(evento)
  }

  @HostListener('mouseover') /* alterar a cor, quando o cursor passar por cima */
  alterarCor(): void{
    this.renderer.setStyle(this.el.nativeElement, 'background', 'blue')
  }

}
