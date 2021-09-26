import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Historic } from 'src/app/models/historic';
import { Vars } from 'src/app/models/vars';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculadoraComponent implements OnInit {

  public operation: string = '0';
  public historics: Historic[] = [];
  public variables: Vars[] = [];
  public result: string = '';
  @Output() onEmiiter: EventEmitter<Historic[]> = new EventEmitter();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }



  public aggNumber(number: string) {
    if (this.operation == '0') {
      this.operation = number;
      this.ref.markForCheck();
      console.log(this.operation);
    } else {
      this.operation += number;
      this.ref.markForCheck();
      console.log(this.operation);
    }
  }

  public deleteAll() {
    this.operation = '0';
    this.result = '';
  }

  public deleteOne() {
    this.operation = this.operation.substring(0, this.operation.length - 1);
    if (this.operation == '') {
      this.operation = '0';

    }
    this.ref.markForCheck();
  }

  action() {
    if (this.operation) {
      this.operar(this.operation);
      this.result = eval(this.operation);
      let historic: Historic = { exprestion: this.operation, result: this.result };
      this.historics.push(historic);
      // this.onEmiiter.next(this.historics);
      console.log(this.historics);
    }
    this.ref.markForCheck();
  }

  parentesis(op: string = "") {
    let parentesisAbierto: number = 0;
    let parentesisCerrado: number = 0;
    if (this.balance(op)) {
      while (op.includes('(') && op.includes(')')) {
        for (let index = 0; index < op.length; index++) {
          if (op[index] == '(') {
            parentesisAbierto = index;
          }
          else if (op[index] == ')') {
            parentesisCerrado = index;
            let replace = op.substring(parentesisAbierto, parentesisCerrado + 1);
            console.log(replace);
            op = op.replace(replace, eval(replace));
            console.log(op);
          }
        }
      }
    } else alert('Hp te faltan parentesis boquefa')
  }

  operar(op: string) {
    if (1 < op.split("(").length) {
      this.parentesis(op);
    }
    else {
      this.result = eval(op);
    }
  }


  private balance(operation: string): boolean {
    let parentesisAbierto: number = 0;
    let parentesisCerrado: number = 0;
    for (let index = 0; index < operation.length; index++) {
      if (operation[index] == '(') {
        parentesisAbierto++;
      }
      else if (operation[index] == ')') {
        parentesisCerrado++;
      }
    }
    return parentesisAbierto == parentesisCerrado ? true : false;
  }

}
