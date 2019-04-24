import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EWalletsComponent } from './e-wallets.component';

describe('EWalletsComponent', () => {
  let component: EWalletsComponent;
  let fixture: ComponentFixture<EWalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EWalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
