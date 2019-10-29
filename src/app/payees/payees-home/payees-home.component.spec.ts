import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeesHomeComponent } from './payees-home.component';

describe('PayeesHomeComponent', () => {
  let component: PayeesHomeComponent;
  let fixture: ComponentFixture<PayeesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
