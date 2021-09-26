import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableVarsComponent } from './table-vars.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [TableVarsComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [TableVarsComponent]
})
export class TableVarsModule { }
