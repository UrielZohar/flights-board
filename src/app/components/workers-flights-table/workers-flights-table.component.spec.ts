import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersFlightsTableComponent } from './workers-flights-table.component';

describe('WorkersFlightsTableComponent', () => {
  let component: WorkersFlightsTableComponent;
  let fixture: ComponentFixture<WorkersFlightsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersFlightsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersFlightsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
