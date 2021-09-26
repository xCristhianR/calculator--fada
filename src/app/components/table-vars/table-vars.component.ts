import { Component, Input, OnInit } from '@angular/core';
import { Vars } from '../../models/vars';

@Component({
  selector: 'app-table-vars',
  templateUrl: './table-vars.component.html',
  styleUrls: ['./table-vars.component.scss']
})
export class TableVarsComponent implements OnInit {

  @Input() vars: Vars[] = [
    {key: 'Hola', value: 123}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
