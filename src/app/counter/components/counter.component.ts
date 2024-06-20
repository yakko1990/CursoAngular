


import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>

<h3><strong><p>Contador:{{contador}} </p></strong></h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset()">Reset</button>
`
})

export class CounterComponent  {
  public title: string = 'Mi Primera App';
    public contador: number = 0;

    increaseBy(value:number):void{
    this.contador += value;
  }

    reset():void{
      this.contador = 0;
  }


}















