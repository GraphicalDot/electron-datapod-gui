import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatementsSummaryComponent } from './bank-statements-summary.component';

describe('BankStatementsSummaryComponent', () => {
  let component: BankStatementsSummaryComponent;
  let fixture: ComponentFixture<BankStatementsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankStatementsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankStatementsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
