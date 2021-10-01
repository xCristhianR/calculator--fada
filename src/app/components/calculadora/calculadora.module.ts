import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import {FormsModule} from '@angular/forms';
import { TableHistoricModule } from '../table-historic/table-historic.module';
import { TableVarsModule } from '../table-vars/table-vars.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableHistoricModule,
    TableVarsModule,
    DialogModule
  ],
  exports: [CalculadoraComponent]
})
export class CalculadoraModule { }
