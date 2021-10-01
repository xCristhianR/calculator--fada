import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vars } from '../../models/vars';

@Component({
  selector: 'app-table-vars',
  templateUrl: './table-vars.component.html',
  styleUrls: ['./table-vars.component.scss']
})
export class TableVarsComponent implements OnInit {

  @Input() vars!: Vars[];
  @Output() onEmiiter: EventEmitter<{ data: Vars, type: string }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEmiter(_vari: any, type: string) {
    this.onEmiiter.next({data: _vari, type});
  }
}
