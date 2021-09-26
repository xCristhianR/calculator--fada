import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHistoricComponent } from './table-historic.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TableHistoricComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [TableHistoricComponent]
})
export class TableHistoricModule { }
