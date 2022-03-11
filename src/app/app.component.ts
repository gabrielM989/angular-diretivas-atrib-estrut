import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula25';

  adicionarClass: boolean = false

  alterarValor(): void { /* se a variável for verdadeira vai para falso e vice versa */
    this.adicionarClass = ! this.adicionarClass
  }

  mostrarParagrafo: boolean = true

  alterarParagrafo(): void {
    this.mostrarParagrafo = ! this.mostrarParagrafo
  }

  cor: string | null = 'vermelho'

  alterarCor(cor: string | null): void {
    this.cor = cor
  }

  alunos: Array <string> = ['Gabriel', 'Lucas', 'Calleri', 'Datena', 'Raul Gil', 'Rogério Ceni']

  @ViewChild('inputAluno') /* recupera um elemento HTML ou um componente, como se fosse o getElementByID */
  ipt!: ElementRef /* o ! diz a entender que a variável pode ficar vazia */


  add(valor: string): void{
    this.alunos.push(valor)
    this.ipt.nativeElement.value = '' /*  */

  }

  remove(valor: string): void{
    this.alunos.pop()
  }

  numeros: number[] = [10, 25, 41, 78, 96, 35, 2.6, 12, 13, 22, 50] /* outra maneira de declarar um Array tipado */
  

}
