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

  public operation: any = '0';
  public historics: Historic[] = [];
  public variables: Vars[] = [];
  public result: string = '';
  public display: boolean = false;
  public variable: Vars = { key: '', value: '' };
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
      let historic: Historic = { exprestion: this.operation, result: this.result };
      this.historics.push(historic);
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
          if (op[index] === '(') {
            parentesisAbierto = index;
          }
          else if (op[index] === ')') {
            parentesisCerrado = index;
            let replace = op.substring(parentesisAbierto, parentesisCerrado + 1);
            let ope = op.substring(parentesisAbierto + 1, parentesisCerrado);
            this.operar(ope);
            console.log(replace);
            op = op.replace(replace, this.result);
            console.log(op);
            index = -1;
          }
        }
      }
    } else alert('te faltan parentesis')
  }

  operar(op: string) {
    if (1 < op.split('(').length) {
      op = '(' + op + ')';
      this.parentesis(op);
    }
    else {
      let i = 0;
      while (i < op.length) {
        if (op[i] === '^') {
          op = this.calculos(op, i, op[i]);
          i = 0;
        } else {
          i++;
        }
      }
      i = 0;
      while (i < op.length) {
        if (op[i] === '*') {
          op = this.calculos(op, i, op[i]);
          i = 0;
        } else {
          i++;
        }
      }
      i = 0;
      while (i < op.length) {
        if (op[i] === '/') {
          op = this.calculos(op, i, op[i]);
          i = 0;
        } else {
          i++;
        }
      }
      i = 0;
      while (i < op.length) {
        if (op[i] === '+') {
          op = this.calculos(op, i, op[i]);
          i = 0;
        } else {
          i++;
        }
      }
      i = 0;
      while (i < op.length) {
        if (op[i] === '-') {
          op = this.calculos(op, i, op[i]);
          i = 0;
        } else {
          i++;
        }
      }
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

  private sacarI(op: string, s: any): any {
    let p = ['', ''];
    let aux = 0;
    console.log(s);
    while (s > 0) {
      if (Number.isInteger(parseInt(op[s - 1]))) {
        p[0] = op[s - 1] + p[0];
        console.log(p[0]);
        s--;
      } else if (op[s - 1] === '.') {
        p[0] = op[s - 1] + p[0];
        console.log(p[0]);
        s--;
      } else {
        aux = s;
        s = 0;
      }
    }
    if (aux == 0) {
      p[1] = '0'
    }
    else p[1] = aux.toString();
    console.log('iz ' + p[0] + ',' + p[1]);
    return p;
  }

  private sacarD(op: string, s: any): any {
    let p = ["", ""];
    let aux = 0
    while (s < (op.length - 1)) {
      if (Number.isInteger(parseInt(op[s + 1]))) {
        p[0] = p[0] + op[s + 1];
        s++;
      } else if (op[s + 1] === '.') {
        p[0] = p[0] + op[s + 1];
        s++;
      } else {
        aux = s;
        s = op.length;
      }
    }
    if (aux == 0) {
      p[1] = (op.length - 1).toString();
    }
    else p[1] = aux.toString();
    console.log('de ' + p[0] + ',' + p[1]);
    return p;
  }

  private calculos(op: string, i: number, t: string): string {
    let iz = this.sacarI(op, i);
    let de = this.sacarD(op, i);
    let r = 0;
    if (t === '^') {
      r = Math.pow(parseFloat(iz[0]), parseFloat(de[0]));
    } else if (t === '*') {
      r = parseFloat(iz[0]) * parseFloat(de[0]);
    } else if (t === '/') {
      r = parseFloat(iz[0]) / parseFloat(de[0]);
    } else if (t === '+') {
      r = parseFloat(iz[0]) + parseFloat(de[0]);
    } else if (t === '-') {
      r = parseFloat(iz[0]) - parseFloat(de[0]);
    }
    let replace = op.substring(parseInt(iz[1]), parseInt(de[1]) + 1);
    console.log(replace);
    this.result = r.toString();
    console.log("resultado: " + this.result)
    op = op.replace(replace, this.result);
    console.log(op);
    return op;
  }

  displayDialog() {
    this.display = true;
  }

  aggVariable(vrs: any) {
    let v: Vars = { key: vrs.key, value: vrs.value };
    this.variables.push(v);
    this.display = false;
    this.variable.key = '';
    this.variable.value = '';
    this.ref.markForCheck();
  }


  onrecived(event: { data: Vars, type: string }) {
    if (event.type == 'use') {
      this.operation == '0' ? this.operation = event.data.value : this.operation += event.data.value;
    }
  }

  aggResult() {
    this.displayDialog();
    console.log(this.operation, 'operation');
    this.variable.value = this.operation;
    this.ref.markForCheck();
  }

}
