import { Component, Input, OnInit } from '@angular/core';
import { Historic } from 'src/app/models/historic';

@Component({
  selector: 'app-table-historic',
  templateUrl: './table-historic.component.html',
  styleUrls: ['./table-historic.component.scss']
})
export class TableHistoricComponent implements OnInit {

  @Input() historics: Historic[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
