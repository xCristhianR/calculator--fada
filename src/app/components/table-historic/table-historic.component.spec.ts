import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHistoricComponent } from './table-historic.component';

describe('TableHistoricComponent', () => {
  let component: TableHistoricComponent;
  let fixture: ComponentFixture<TableHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHistoricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
