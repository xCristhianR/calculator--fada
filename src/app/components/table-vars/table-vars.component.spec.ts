import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVarsComponent } from './table-vars.component';

describe('TableVarsComponent', () => {
  let component: TableVarsComponent;
  let fixture: ComponentFixture<TableVarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
